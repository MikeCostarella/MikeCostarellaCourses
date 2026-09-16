import { useEffect, useState } from "react";
import DirectoryPage from "./components/DirectoryPage";
import CoursePage from "./components/CoursePage";
import AboutPage from "./components/AboutPage";
import BuildStamp from "./components/BuildStamp";
import MainMenu from "./components/MainMenu";
import { COURSE_BY_ID } from "./data/courses";
import { SITE } from "./data/site";

// Hash-based routing — no router dependency; works on GitHub Pages project
// sites without 404 rewriting.
type Route = { page: "directory" } | { page: "about" } | { page: "course"; id: string };

function parseHash(): Route {
  const h = window.location.hash;
  const m = /^#\/c\/([a-z0-9-]+)$/.exec(h);
  if (m && COURSE_BY_ID[m[1]]) return { page: "course", id: m[1] };
  if (h === "#/about") return { page: "about" };
  return { page: "directory" };
}

function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);
  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();
  return (
    <div className="app">
      <header className="masthead">
        <MainMenu />
        <a className="brand" href="#/">
          <h1>&#127891; {SITE.title}</h1>
          <div className="sub">{SITE.tagline}</div>
        </a>
        <nav className="top-links">
          <a href="#/" className={route.page === "directory" ? "on" : ""}>Directory</a>
          <a href="#/about" className={route.page === "about" ? "on" : ""}>How these are built</a>
          <a href="https://mikecostarella.github.io/MyWebSite/" target="_blank" rel="noreferrer">
            My Web Site ↗
          </a>
        </nav>
        <BuildStamp />
      </header>

      <div className="body">
        <main className="content content-wide">
          {route.page === "directory" && <DirectoryPage />}
          {route.page === "about" && <AboutPage />}
          {route.page === "course" && <CoursePage course={COURSE_BY_ID[route.id]} />}
        </main>
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Costarella Innovations, LLC · {SITE.author} ·{" "}
          <a className="contact-link" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>{" "}
          · React + TypeScript + Vite PWA on GitHub Pages
        </span>
        <BuildStamp />
      </footer>
    </div>
  );
}
