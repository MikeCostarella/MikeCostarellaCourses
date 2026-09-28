// Learning paths — how the courses fit together into a program. Each step is a
// course id from courses.ts, in the order a student would take them.

export interface LearningPath {
  id: string;
  title: string;
  blurb: string;
  steps: string[];
}

export const PATHS: LearningPath[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    blurb: "From how machines learn, to what's inside a large language model, to building agents on top of one.",
    steps: ["intro-aiml", "llm-foundations", "agentic-ai"],
  },
  {
    id: "swe",
    title: "Software engineering",
    blurb: "Learn to work on a software team, then run a full team process on a live app.",
    steps: ["github-scrum", "csci5802"],
  },
  {
    id: "fullstack",
    title: "Full-stack development",
    blurb: "Start programming from zero, then build production web apps and the cloud services behind them.",
    steps: ["python", "react-architecture", "gcloud"],
  },
  {
    id: "data",
    title: "Data analytics",
    blurb: "A business-focused introduction with no prerequisite: spreadsheets, then Python, ending with a dashboard.",
    steps: ["analytics"],
  },
];

export function pathsFor(courseId: string): LearningPath[] {
  return PATHS.filter((p) => p.steps.includes(courseId));
}
