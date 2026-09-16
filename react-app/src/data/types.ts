// The course directory registry types. One typed registry (courses.ts)
// drives the directory page, the main menu, and the stats — the fleet's
// Registry pattern, same as OhioCounties' counties.ts.

export type CourseStatus = "teaching" | "proposed" | "designed" | "archived";

export interface RepoLink {
  /** GitHub repo name under MikeCostarella. */
  repo: string;
  /** What this repo is for, in a few words. */
  role: string;
  /** Live GitHub Pages URL, when the repo deploys. */
  pagesUrl?: string;
}

export interface CourseDef {
  /** Stable id used in the URL hash, e.g. "python". */
  id: string;
  title: string;
  /** Catalog number(s), e.g. "CSCI 145". */
  number?: string;
  institution: string;
  /** Term, e.g. "Fall 2026", or "Self-paced". */
  term: string;
  status: CourseStatus;
  credits?: string;
  /** One-paragraph description. */
  summary: string;
  /** The course site, when there is one. */
  siteUrl?: string;
  /** The primary repo (course site or design of record). */
  repo: string;
  /** Supporting repos: student templates, starters, management tools. */
  related?: RepoLink[];
  /** Tags for the filter row. */
  tags: string[];
}
