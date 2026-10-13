import { NextResponse } from "next/server";
import { site } from "@/lib/data";

type QuotePayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  details?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ reason: "invalid_json" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const details = payload.details?.trim() ?? "";

  if (!name || !email || !isValidEmail(email) || !service || !details) {
    return NextResponse.json({ reason: "validation_failed" }, { status: 400 });
  }

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        reason: "not_configured",
        contactEmail: site.email,
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "quote_request",
        submittedAt: new Date().toISOString(),
        name,
        email,
        company: payload.company?.trim() || null,
        service,
        budget: payload.budget?.trim() || null,
        details,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { reason: "delivery_failed", contactEmail: site.email },
        { status: 502 },
      );
    }

    return NextResponse.json({ delivered: true });
  } catch {
    return NextResponse.json(
      { reason: "delivery_failed", contactEmail: site.email },
      { status: 502 },
    );
  }
}
