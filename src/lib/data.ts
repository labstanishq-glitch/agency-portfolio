export const site = {
  name: "YOUR AGENCY",
  title: "Your Agency — Digital Products, Websites & Automation",
  description:
    "Websites, apps, AI automation and custom digital systems for ambitious businesses. Design, development and automation with one focused team.",
  email: "hello@youragency.com",
  instagram: "https://instagram.com/youragency",
  whatsapp: "https://wa.me/0000000000",
  year: 2026,
};

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  href?: string;
  external?: boolean;
  concept?: boolean;
};

export const projects: Project[] = [];

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "High-performance websites designed to turn visitors into customers.",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Modern web and mobile applications built around real business workflows.",
  },
  {
    number: "03",
    title: "AI & Business Automation",
    description:
      "Automate repetitive work, connect your tools and build smarter business workflows.",
  },
  {
    number: "04",
    title: "AI Chatbots",
    description:
      "Conversational assistants that answer questions, qualify leads and support customers.",
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Technical and content foundations designed to improve search visibility.",
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Purpose-built digital systems for businesses with workflows that off-the-shelf software cannot handle.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, goals and problem.",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Create the visual direction and user experience.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop, test and refine the product.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "Deploy, optimize and support the system.",
  },
];

export const principles = [
  {
    title: "Direct Communication",
    description:
      "You work directly with the people building your project.",
  },
  {
    title: "Built Around Your Business",
    description:
      "We don't force your workflow into a generic template.",
  },
  {
    title: "Fast & Focused",
    description:
      "Small team, focused execution and fewer unnecessary layers.",
  },
  {
    title: "Built To Grow",
    description:
      "Every system is designed with future improvements in mind.",
  },
];

export const needOptions = [
  "Website",
  "App",
  "AI & Automation",
  "SEO",
  "Custom Software",
  "Other",
] as const;

export type NeedOption = (typeof needOptions)[number];

export const contactMethods = ["Email", "WhatsApp / Phone", "Either"] as const;

export type PricingMarket = "india" | "international";

export type WebsitePackage = {
  id: string;
  name: string;
  prices: Record<PricingMarket, string>;
  features: string[];
  ctaLabel: "Get started" | "Request a quote";
  featured?: boolean;
};

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter",
    prices: { india: "₹9,999", international: "$299" },
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form or WhatsApp integration",
      "Basic on-page SEO",
      "Performance optimization",
      "2 revision rounds",
      "Estimated 5–7 business days",
    ],
    ctaLabel: "Get started",
  },
  {
    id: "business",
    name: "Business",
    prices: { india: "₹19,999", international: "$599" },
    featured: true,
    features: [
      "Up to 10 pages",
      "Premium custom UI and animations",
      "Portfolio or project gallery",
      "WhatsApp and enquiry forms",
      "On-page SEO and metadata",
      "Analytics integration",
      "2 revision rounds",
      "Estimated 7–12 business days",
    ],
    ctaLabel: "Get started",
  },
  {
    id: "premium",
    name: "Premium",
    prices: { india: "₹39,999", international: "$1,299" },
    features: [
      "Up to 15 pages",
      "Bespoke design and motion",
      "Advanced project/service showcases",
      "Custom forms and third-party integrations",
      "Technical SEO foundations",
      "Analytics and conversion tracking",
      "3 revision rounds",
      "Estimated 12–20 business days",
    ],
    ctaLabel: "Get started",
  },
];

export type TieredOffering = {
  name: string;
  prices: Record<PricingMarket, string> | null;
  pricePrefix?: "from";
  ctaLabel: "Get started" | "Request a quote";
};

export const webAppOfferings: TieredOffering[] = [
  {
    name: "MVP / Prototype",
    prices: { india: "₹49,999", international: "$1,499" },
    pricePrefix: "from",
    ctaLabel: "Request a quote",
  },
  {
    name: "Business Application",
    prices: { india: "₹99,999", international: "$2,999" },
    pricePrefix: "from",
    ctaLabel: "Request a quote",
  },
  {
    name: "Complex platforms",
    prices: null,
    ctaLabel: "Request a quote",
  },
];

export const maintenancePlans: TieredOffering[] = [
  {
    name: "Essential Care",
    prices: { india: "₹1,499", international: "$49" },
    ctaLabel: "Get started",
  },
  {
    name: "Business Care",
    prices: { india: "₹2,999", international: "$99" },
    ctaLabel: "Get started",
  },
  {
    name: "Priority Care",
    prices: { india: "₹5,999", international: "$199" },
    ctaLabel: "Get started",
  },
];

export const seoPlans: TieredOffering[] = [
  {
    name: "SEO Foundation",
    prices: { india: "₹7,500", international: "$199" },
    ctaLabel: "Get started",
  },
  {
    name: "Growth SEO",
    prices: { india: "₹14,999", international: "$399" },
    ctaLabel: "Get started",
  },
  {
    name: "Competitive SEO",
    prices: { india: "₹29,999", international: "$799" },
    ctaLabel: "Get started",
  },
];

export const pricingDisclaimers = [
  "Domain registration and hosting are charged separately.",
  "Third-party subscriptions, paid APIs and usage fees are excluded unless explicitly quoted.",
  "Maintenance scope and monthly update limits must be agreed before purchase.",
  "Prices are starting prices. Complex integrations, extra pages and custom functionality require a tailored quote.",
];
