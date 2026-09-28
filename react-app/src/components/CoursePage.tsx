import type { CourseDef } from "../data/types";
import { COURSE_BY_ID, repoUrl } from "../data/courses";
import { pathsFor } from "../data/paths";
import StatusTags from "./StatusTags";

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
        <StatusTags course={course} />
        {course.credits && <> · {course.credits}</>}
      </p>

      <section>
        <p className="cc-pitch">{course.pitch}</p>
        <p>{course.summary}</p>
      </section>

      {pathsFor(course.id).filter((p) => p.steps.length > 1).map((p) => (
        <section key={p.id}>
          <h2>Part of the {p.title.toLowerCase()} path</h2>
          <ol className="path-steps">
            {p.steps.map((id) => (
              <li key={id}>
                {id === course.id ? <b>{COURSE_BY_ID[id].title}</b> : <a href={`#/c/${id}`}>{COURSE_BY_ID[id].title}</a>}
              </li>
            ))}
          </ol>
        </section>
      ))}

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
        <a href="#/departments">For departments →</a>
      </nav>
    </article>
  );
}
