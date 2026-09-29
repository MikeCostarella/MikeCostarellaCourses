export const SITE = {
  title: "Mike Costarella — Courses",
  heading: "Courses",
  tagline: "Hands-on courses in software, Python, data, and AI, taught by a working developer",
  author: "Mike Costarella",
  contactEmail: "Mike.Costarella@gmail.com",
  repoUrl: "https://github.com/MikeCostarella/MikeCostarellaCourses",
  intro:
    "I've spent more than 20 years building enterprise software, and today I build civic apps for the Trumbull County Combined Health District. My courses teach the way that work actually gets done. Students write real code every week, ship changes to live applications, and leave with a GitHub portfolio an employer can open. Every course has weekly labs, projects checked in stages instead of all-or-nothing exams, and the tools and team practices you'd use on the job from day one.",
} as const;

/** The "Why these courses" row on the directory page. */
export const HIGHLIGHTS: { title: string; body: string }[] = [
  {
    title: "Real software, not toy problems",
    body: "In CSCI 5802 the class works as a Scrum team and ships to Bullpen, a deployed app, every two weeks.",
  },
  {
    title: "A portfolio, not just a grade",
    body: "Labs and projects live in each student's own GitHub, ready to show an employer.",
  },
  {
    title: "How industry works, from week one",
    body: "Issues, pull requests, code review, and automated checks on every change.",
  },
  {
    title: "AI taught from the ground up",
    body: "A three-course path from “what is machine learning” to building AI agents, all runnable on a laptop with no GPU or paid API key.",
  },
  {
    title: "Real on-ramps",
    body: "Python Programming and Intro to Data Analytics assume no prior experience.",
  },
];
