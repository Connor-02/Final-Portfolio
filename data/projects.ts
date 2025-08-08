export const projects = [
  {
    slug: "cyber-safety-training",
    title: "Cyber Safety Training Module",
    summary: "Interactive phishing education with instant feedback and explainers.",
    tags: ["Security", "Web", "Education", "JavaScript"],
    links: {
      github: "https://github.com/Connor-02/Cyber-Training-Module",
      live: "https://connor-02.github.io/Cyber-Training-Module/"
    },
    image: "/projects/phishing-hero.svg"
  },
  {
    slug: "cute-budget-planner",
    title: "Cute Budget Planner",
    summary: "Python + PySide6 budgeting app with recurring income, reminders, and a bunny mascot.",
    tags: ["Python", "Desktop", "Finance", "PySide6"],
    links: {
      github: "https://github.com/yourname/CuteBudgetApp"
    },
    image: "/projects/budget-hero.svg"
  }
] as const;
