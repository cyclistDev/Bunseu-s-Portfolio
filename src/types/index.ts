export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "android" | "fullstack" | "web";
  role: string;
  stack: string[];
  features: string[];
  challenge: string;
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  images: string[];
  builtWithAI: boolean;
  aiNotes?: string;
  featured: boolean;
  isClientProject?: boolean;
};

export type SocialLink = { label: string; url: string };

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  about: string[];
  location?: string;
  email: string;
  cvUrl: string;
  socials: SocialLink[];
  siteUrl: string;
  availability: string;
  heroHeadline: string;
  heroSubtext: string;
  heroTech: string[];
  heroChips: string[];
  heroImage: string;
  interests: string[];
  photo?: string;
};

export type SkillGroup = {
  group: "Mobile" | "Frontend" | "Backend" | "Design & Planning" | "DevOps & Quality" | "Tools" | "Teamwork";
  items: string[];
};
