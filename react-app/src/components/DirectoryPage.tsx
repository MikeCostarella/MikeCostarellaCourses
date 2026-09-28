import { useState } from "react";
import { COURSES, COURSE_BY_ID, INSTITUTIONS, STATUS_LABEL, STATUS_ORDER } from "../data/courses";
import { HIGHLIGHTS, SITE } from "../data/site";
import { PATHS } from "../data/paths";
import CourseCard from "./CourseCard";

export default function DirectoryPage() {
  const [inst, setInst] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
  const shown = COURSES.filter((c) => (inst === "all" || c.institution === inst) && (status === "all" || c.status === status))
    .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));

  return (
    <article className="home">
      <h1>{SITE.heading}</h1>
      <p className="tagline">{SITE.tagline}</p>
      <p>{SITE.intro}</p>

      <div className="stat-row">
        <span><b>{COURSES.length}</b> courses</span>
        <span><b>{COURSES.filter((c) => c.status === "teaching").length}</b> teaching now</span>
        <span><b>{PATHS.length}</b> learning paths</span>
        <span><b>{COURSES.filter((c) => c.siteUrl).length}</b> with a live course site you can browse</span>
        <span><b>20+</b> years building software</span>
      </div>

      <section>
        <h2>Why these courses</h2>
        <div className="highlight-grid">
          {HIGHLIGHTS.map((h) => (
            <div className="highlight" key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Learning paths</h2>
        <div className="path-list">
          {PATHS.map((p) => (
            <div className="path" key={p.id}>
              <h3>{p.title}</h3>
              <p className="path-blurb">{p.blurb}</p>
              <ol className="path-steps">
                {p.steps.map((id) => (
                  <li key={id}><a href={`#/c/${id}`}>{COURSE_BY_ID[id].title}</a></li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>All courses</h2>
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
      </section>

      <section className="dept-cta">
        <div>
          <h2>Looking for an instructor?</h2>
          <p>Every course here has a written syllabus, module pages, and labs. See what I can teach and how to reach me.</p>
        </div>
        <a className="btn" href="#/departments">For departments →</a>
      </section>
    </article>
  );
}
