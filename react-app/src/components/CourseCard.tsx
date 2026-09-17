import type { CourseDef } from "../data/types";
import { STATUS_LABEL, repoUrl } from "../data/courses";

export default function CourseCard({ course }: { course: CourseDef }) {
  return (
    <article className={"course-card status-" + course.status}>
      <div className="cc-top">
        <span className="cc-inst">{course.institution ?? ""}</span>
        <span className="cc-tagset">
          {course.draft && <span className="tag tag-draft">Draft</span>}
          <span className={"tag tag-" + course.status}>{STATUS_LABEL[course.status]}</span>
        </span>
      </div>
      <h2 className="cc-title">
        <a href={`#/c/${course.id}`}>
          {course.number && <span className="cc-no">{course.number}</span>}
          {course.title}
        </a>
      </h2>
      <div className="cc-meta">
        {course.term}
        {course.credits && ` · ${course.credits}`}
      </div>
      <p className="cc-summary">{course.summary}</p>
      <div className="cc-links">
        {course.siteUrl && (
          <a className="btn" href={course.siteUrl} target="_blank" rel="noreferrer">Course site ↗</a>
        )}
        <a className="btn btn-quiet" href={repoUrl(course.repo)} target="_blank" rel="noreferrer">Repository ↗</a>
        <a className="btn btn-quiet" href={`#/c/${course.id}`}>Details</a>
      </div>
      <div className="cc-tags">
        {course.tags.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
    </article>
  );
}
