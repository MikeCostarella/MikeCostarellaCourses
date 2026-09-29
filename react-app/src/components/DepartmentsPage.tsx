import { COURSES, COURSE_BY_ID } from "../data/courses";
import { SITE } from "../data/site";
import { PATHS } from "../data/paths";

// For department chairs and hiring committees: what I can teach, how ready it
// is, and who I am.
export default function DepartmentsPage() {
  const ready = COURSES.filter((c) => c.status !== "teaching" && !c.draft && c.id !== "python-demo");
  const inDev = COURSES.filter((c) => c.draft);
  const teaching = COURSES.filter((c) => c.status === "teaching");

  return (
    <article className="module-page">
      <div className="crumbs"><a href="#/">Directory</a> <span>›</span> For departments</div>
      <h1><span className="mod-no">For departments</span>Courses I can teach for your program</h1>
      <p className="mod-subtitle">A working developer in the classroom, with course material already written.</p>

      <section>
        <h2>About me</h2>
        <p>
          I'm an independent developer and consultant (Costarella Innovations, LLC) in Girard, Ohio, with
          more than 20 years of enterprise software experience in .NET, Azure, Angular, and SQL Server. I
          build civic-tech web apps for the Trumbull County Combined Health District, and I teach in the Computer Science and Information
          Technology department at Youngstown State University.
        </p>
      </section>

      <section>
        <h2>What you get</h2>
        <ul className="readings">
          <li><span>A complete course site for each course: syllabus, module pages, weekly labs, and project checkpoints you can review before you schedule anything.</span></li>
          <li><span>Assessment through weekly labs and staged projects, so students build and show their work all term instead of cramming for exams.</span></li>
          <li><span>Course details that change by school (number, term, room, contact) are kept separate from the material, so a course can be offered at your institution as written.</span></li>
          <li><span>Students work in GitHub from the start and finish with a public portfolio of what they built.</span></li>
        </ul>
      </section>

      <section>
        <h2>Teaching now</h2>
        <ul className="readings">
          {teaching.map((c) => (
            <li key={c.id}><a href={`#/c/${c.id}`}>{c.number ? `${c.number} · ` : ""}{c.title}</a><span> — {c.institution}, {c.term}. {c.pitch}</span></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Ready to offer</h2>
        <ul className="readings">
          {ready.map((c) => (
            <li key={c.id}><a href={`#/c/${c.id}`}>{c.title}</a><span> — {c.pitch}</span></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>In development</h2>
        <p>Designed and outlined, with course sites under way. Each can be finished to fit a specific term.</p>
        <ul className="readings">
          {inDev.map((c) => (
            <li key={c.id}><a href={`#/c/${c.id}`}>{c.title}</a><span> — {c.pitch}</span></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Courses that build on each other</h2>
        <ul className="readings">
          {PATHS.filter((p) => p.steps.length > 1).map((p) => (
            <li key={p.id}><b>{p.title}:</b> <span>{p.steps.map((id) => COURSE_BY_ID[id].title).join(" → ")}</span></li>
          ))}
        </ul>
      </section>

      <section className="dept-cta">
        <div>
          <h2>Let's talk</h2>
          <p>Happy to share a syllabus, walk through a course site, or give a teaching demonstration.</p>
        </div>
        <a className="btn" href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Teaching inquiry")}`}>Email me ✉</a>
      </section>

      <nav className="pager">
        <a href="#/">← Directory</a>
        <a href="#/c/python-demo">See a sample lesson →</a>
      </nav>
    </article>
  );
}
