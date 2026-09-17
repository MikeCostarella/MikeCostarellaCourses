import type { CourseDef } from "../data/types";
import { STATUS_LABEL, repoUrl } from "../data/courses";

export default function CoursePage({ course }: { course: CourseDef }) {
  return (
    <article className="module-page">
      <div className="crumbs">
        <a href="#/">Directory</a> <span>›</span> {course.institution ?? course.title}
      </div>
      <h1>
        <span className="mod-no">{[course.number ?? course.institution, course.term].filter(Boolean).join(" · ")}</span>
        {course.title}
      </h1>
      <p className="mod-subtitle">
        <span className={"tag tag-" + course.status}>{STATUS_LABEL[course.status]}</span>
        {course.credits && <> · {course.credits}</>}
      </p>

      <section>
        <p>{course.summary}</p>
      </section>

      <section>
        <h2>Links</h2>
        <ul className="readings">
          {course.siteUrl && (
            <li><a href={course.siteUrl} target="_blank" rel="noreferrer">Course site</a><span> — the live site students use: syllabus, module pages, labs.</span></li>
          )}
          <li><a href={repoUrl(course.repo)} target="_blank" rel="noreferrer">{course.repo}</a><span> — the primary repository{course.siteUrl ? " (source of the course site)" : " (design of record)"}.</span></li>
        </ul>
      </section>

      {course.related && course.related.length > 0 && (
        <section>
          <h2>Supporting repositories</h2>
          <ul className="readings">
            {course.related.map((r) => (
              <li key={r.repo}>
                <a href={repoUrl(r.repo)} target="_blank" rel="noreferrer">{r.repo}</a>
                <span> — {r.role}.</span>
                {r.pagesUrl && <> <a href={r.pagesUrl} target="_blank" rel="noreferrer">live ↗</a></>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <div className="cc-tags">{course.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      </section>

      <nav className="pager">
        <a href="#/">← Directory</a>
        <a href="#/about">How these are built →</a>
      </nav>
    </article>
  );
}
