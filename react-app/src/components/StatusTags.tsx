import type { CourseDef } from "../data/types";
import { STATUS_LABEL } from "../data/courses";

// A course still being written shows "In development"; a written one shows its
// status. A designed course in development is not yet "Ready to offer", so it
// shows only the development tag.
export default function StatusTags({ course }: { course: CourseDef }) {
  const showStatus = !(course.draft && course.status === "designed");
  return (
    <>
      {course.draft && <span className="tag tag-draft">In development</span>}
      {showStatus && <span className={"tag tag-" + course.status}>{STATUS_LABEL[course.status]}</span>}
    </>
  );
}
