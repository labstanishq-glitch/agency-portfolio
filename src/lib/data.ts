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
};

export const projects: Project[] = [
  {
    number: "01",
    name: "CALITRIBE",
    category: "Website Design & Development",
    description:
      "A premium digital presence built for a calisthenics and strength training brand in Andaman.",
    href: "https://calitribe.in",
    external: true,
  },
  {
    number: "02",
    name: "NORTHLINE COMMERCE",
    category: "E-commerce & Web App",
    description:
      "A streamlined storefront and inventory workflow for a growing regional retail brand.",
  },
  {
    number: "03",
    name: "FIELDWORK OPS",
    category: "Custom Software",
    description:
      "Internal tooling to coordinate field teams, schedules and client updates in one place.",
  },
  {
    number: "04",
    name: "ATELIER STUDIO",
    category: "Brand Website",
    description:
      "An editorial portfolio site for a creative studio with a focus on craft and clarity.",
  },
];

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
