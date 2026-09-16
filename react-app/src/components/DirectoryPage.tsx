import { useState } from "react";
import { COURSES, INSTITUTIONS, REPO_COUNT, STATUS_LABEL, STATUS_ORDER } from "../data/courses";
import { SITE } from "../data/site";
import CourseCard from "./CourseCard";

export default function DirectoryPage() {
  const [inst, setInst] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
  const shown = COURSES.filter((c) => (inst === "all" || c.institution === inst) && (status === "all" || c.status === status))
    .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));

  return (
    <article className="home">
      <p className="kicker">Costarella Innovations, LLC</p>
      <h1>{SITE.heading}</h1>
      <p className="tagline">{SITE.tagline}</p>
      <p>{SITE.intro}</p>

      <div className="stat-row">
        <span><b>{COURSES.length}</b> courses</span>
        <span><b>{COURSES.filter((c) => c.status === "teaching").length}</b> teaching now</span>
        <span><b>{COURSES.filter((c) => c.siteUrl).length}</b> live course sites</span>
        <span><b>{REPO_COUNT}</b> repositories</span>
        <span><b>{INSTITUTIONS.length}</b> institutions</span>
      </div>

      <div className="filters">
        <label>
          Institution{" "}
          <select value={inst} onChange={(e) => setInst(e.target.value)}>
            <option value="all">All</option>
            {INSTITUTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </label>
        <label>
          Status{" "}
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            {STATUS_ORDER.map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
          </select>
        </label>
        <span className="filter-count">{shown.length} of {COURSES.length}</span>
      </div>

      <div className="course-grid">
        {shown.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
    </article>
  );
}
