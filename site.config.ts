export const siteConfig = {
  name: "Connor Murray",
  role: "Security-minded Software Engineer",
  location: "Newcastle, NSW, Australia",
  summary:
    "I build practical security tools and delightful apps. Focused on cybersecurity education, automation, and clean UX.",
  description: "Security-minded Software Engineer building practical security tools and delightful applications. Specialized in cybersecurity education, automation, and clean user experiences.",
  url: "https://connor-murray.vercel.app",
  links: {
    github: "https://github.com/Connor-02",
    linkedin: "https://www.linkedin.com/in/",
    email: "mailto:connor@example.com",
  },
  focusAreas: ["Cybersecurity", "Web Apps", "Automation"],
  skills: ["Cybersecurity", "Python", "JavaScript/TypeScript", "React/Next.js", "SQLite", "Tailwind"],
  projectTags: ["Security", "Web", "Desktop", "Python", "Education", "Finance", "JavaScript", "PySide6"]
} as const;

export type SiteConfig = typeof siteConfig;
