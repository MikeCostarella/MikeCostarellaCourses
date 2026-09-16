export default function AboutPage() {
  return (
    <article className="module-page">
      <div className="crumbs"><a href="#/">Directory</a> <span>›</span> How these are built</div>
      <h1><span className="mod-no">Method</span>How these courses are built</h1>
      <p className="mod-subtitle">The same way the civic-data fleet is built — and on purpose.</p>

      <section>
        <p>
          Each course site is a React + TypeScript + Vite progressive web app deployed to GitHub
          Pages by a GitHub Actions workflow. The course content — units, modules, lecture topics,
          readings, code excerpts, labs, checkpoints — lives in one typed registry
          (<code>src/data/units/*.ts</code> gathered by <code>src/data/modules.ts</code>), and every
          page derives from it: the syllabus, the module pages, the navigation, and the stats on the
          home page. Change a lab in one file and the whole site agrees.
        </p>
        <p>
          Every code excerpt shown on a site is a runnable file in that repository's{" "}
          <code>examples/</code> folder, so nothing on a module page is a screenshot of code that
          might not work. Course-level facts that vary by school — course number, term, room,
          contact — are isolated in <code>src/data/course.ts</code> so the same content can be
          offered at more than one institution.
        </p>
        <p>
          Where a course has students, it usually has supporting repositories too: a student app
          published as a GitHub template, a starter every student forks, and an instructor
          management app that reads the roster and watches the forks. All of them are registered in
          the Statehouse fleet manifest, so they get the same status, commit, and deploy tooling as
          the 200+ county apps.
        </p>
        <p>
          The point is not tooling for its own sake. A course built this way is a worked example of
          the practices it teaches — versioned, type-checked, tested where it matters, and shipped
          from CI — and students can read the source of the site they are learning from.
        </p>
      </section>

      <nav className="pager">
        <a href="#/">← Directory</a>
        <a href="https://github.com/MikeCostarella/MikeCostarellaCourses" target="_blank" rel="noreferrer">This repository ↗</a>
      </nav>
    </article>
  );
}
