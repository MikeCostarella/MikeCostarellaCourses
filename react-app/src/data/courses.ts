import type { CourseDef, CourseStatus } from "./types";

// The registry — the single source of truth for the directory. Add a course
// here and it appears on the page, in the menu, and in the stats.

export const GITHUB = "https://github.com/MikeCostarella";
export const PAGES = "https://mikecostarella.github.io";

export const COURSES: CourseDef[] = [
  {
    id: "csci5802",
    title: "Software Tools and Practices",
    number: "CSCI 5802",
    institution: "Youngstown State University",
    term: "Fall 2026",
    status: "teaching",
    credits: "3 s.h.",
    summary:
      "Version control, build and make systems, CI, debuggers, testing, static and dynamic analysis, architecture, and design patterns — practiced on the Ohio Counties civic-data application and its ecosystem of 200+ per-county apps, in Windows and UNIX environments. Fourteen modules, hands-on labs, a semester project brought under professional discipline module by module.",
    siteUrl: `${PAGES}/MyWebSiteDevelopmentCourse/`,
    repo: "MyWebSiteDevelopmentCourse",
    related: [
      { repo: "CSCI5802Fall2026Student", role: "Student app (GitHub template)" },
      { repo: "CSCI5802Fall2026Management", role: "Instructor term-management app" },
      { repo: "csci5802-api-starter", role: "Starter API every student forks" },
    ],
    tags: ["YSU", "graduate", "software engineering", "Git", "TypeScript"],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Foundations",
    term: "Not yet scheduled",
    status: "proposed",
    draft: true,
    credits: "3 s.h.",
    summary:
      "An upper-level undergraduate / graduate course that goes beyond prompt engineering to building agentic systems: LLM foundations for engineers, structured output, tool calling and the agent loop, retrieval and memory, the Model Context Protocol, multi-agent orchestration, AI-assisted software engineering, evaluation, and security and responsible use. Thirteen modules over fifteen weeks, twelve labs, a midterm checkpoint, and evaluated team final projects.",
    siteUrl: `${PAGES}/CS_AgenticAIFoundations/`,
    repo: "CS_AgenticAIFoundations",
    tags: ["undergraduate", "graduate", "agentic AI", "LLMs", "MCP"],
  },
  {
    id: "python",
    title: "Python Programming",
    term: "Not yet scheduled",
    status: "proposed",
    draft: true,
    credits: "3 s.h.",
    summary:
      "An introductory programming course in Python, no prior programming assumed. Variables, control flow, functions, strings, lists and dictionaries, files and exceptions, modules and virtual environments, testing and style, classes, CSV/JSON, and a capstone project. Fourteen modules, a lab every week, two project checkpoints instead of exams.",
    siteUrl: `${PAGES}/CS_PythonProgrammingCourse/`,
    repo: "CS_PythonProgrammingCourse",
    tags: ["undergraduate", "Python", "intro programming"],
  },
  {
    id: "analytics",
    title: "Intro to Data Analytics",
    term: "Not yet scheduled",
    status: "proposed",
    draft: true,
    credits: "3 s.h.",
    summary:
      "An overview of the field with a business focus and no prerequisite. Spreadsheet first — tidy data, pivots, descriptive statistics, visualization, time series — then Python notebooks in Colab for cleaning, EDA, inference, regression, classification, clustering, and association rules. Ends with a dashboard and a findings-first capstone presentation.",
    siteUrl: `${PAGES}/CS_IntroToDataAnalytics/`,
    repo: "CS_IntroToDataAnalytics",
    tags: ["undergraduate", "analytics", "statistics", "pandas"],
  },
  {
    id: "gcloud",
    title: "Building Services in Google Cloud",
    term: "Self-paced",
    status: "designed",
    draft: true,
    summary:
      "A self-paced course in which you build a React + TypeScript client and the Google Cloud service it calls — a Fastify + TypeScript API on Cloud Run — developed together, deployed separately, joined by one contract. Design of record; the premise comes from the Statehouse fleet's static-data architecture and what it would take to give it a live backend.",
    repo: "MyGoogleCloudAPICourse",
    tags: ["self-paced", "cloud", "TypeScript", "APIs"],
  },
];

export const STATUS_LABEL: Record<CourseStatus, string> = {
  teaching: "Teaching now",
  proposed: "Proposed",
  designed: "Designed",
  archived: "Archived",
};

export const STATUS_ORDER: CourseStatus[] = ["teaching", "proposed", "designed", "archived"];

export const COURSE_BY_ID: Record<string, CourseDef> = Object.fromEntries(COURSES.map((c) => [c.id, c]));

export const INSTITUTIONS = Array.from(new Set(COURSES.flatMap((c) => (c.institution ? [c.institution] : []))));

/** Courses not tied to an institution (proposed or self-paced). */
export const UNAFFILIATED = COURSES.filter((c) => !c.institution);

export const REPO_COUNT = COURSES.reduce((n, c) => n + 1 + (c.related?.length ?? 0), 0);

export function repoUrl(repo: string): string {
  return `${GITHUB}/${repo}`;
}
