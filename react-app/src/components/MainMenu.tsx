import { useEffect, useRef, useState } from "react";
import { COURSES, INSTITUTIONS, repoUrl } from "../data/courses";
import { SITE } from "../data/site";
import BuildStamp from "./BuildStamp";

// The fleet's hamburger accordion main menu: View, one section per
// institution, Links, with the build stamp at the foot.

const EXTERNAL = [
  { label: "This repository", href: SITE.repoUrl },
  { label: "GitHub Actions (deploys)", href: SITE.repoUrl + "/actions" },
  { label: "My Web Site", href: "https://mikecostarella.github.io/MyWebSite/" },
  { label: "Ohio Counties (live app)", href: "https://mikecostarella.github.io/OhioCounties/" },
  { label: "Statehouse (fleet home)", href: "https://mikecostarella.github.io/StatehouseHome/" },
];

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>("view");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  const toggle = (id: string) => setSection((s) => (s === id ? null : id));
  const head = (id: string, label: string) => (
    <button className={"acc-head" + (section === id ? " open" : "")} aria-expanded={section === id} onClick={() => toggle(id)}>
      <span>{label}</span>
      <span className="chev">▾</span>
    </button>
  );

  return (
    <div className="main-menu" ref={ref}>
      <button className="menu-btn" aria-expanded={open} aria-label="Main menu" onClick={() => setOpen((v) => !v)}>
        ☰
      </button>
      {open && (
        <div className="menu-panel">
          <div className="acc-section">
            {head("view", "View")}
            {section === "view" && (
              <div className="acc-body">
                <a href="#/">Directory</a>
                <a href="#/about">How these are built</a>
              </div>
            )}
          </div>

          {INSTITUTIONS.map((inst) => {
            const id = "inst-" + inst.replace(/\W+/g, "-").toLowerCase();
            return (
              <div className="acc-section" key={id}>
                {head(id, inst)}
                {section === id && (
                  <div className="acc-body">
                    {COURSES.filter((c) => c.institution === inst).map((c) => (
                      <a key={c.id} href={`#/c/${c.id}`}>
                        {c.number ? `${c.number} · ` : ""}{c.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="acc-section">
            {head("repos", "Repositories")}
            {section === "repos" && (
              <div className="acc-body">
                {COURSES.flatMap((c) => [c.repo, ...(c.related?.map((r) => r.repo) ?? [])]).map((r) => (
                  <a key={r} href={repoUrl(r)} target="_blank" rel="noreferrer">{r} ↗</a>
                ))}
              </div>
            )}
          </div>

          <div className="acc-section">
            {head("links", "Links")}
            {section === "links" && (
              <div className="acc-body">
                {EXTERNAL.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
                ))}
                <a href={`mailto:${SITE.contactEmail}`}>Contact ✉</a>
              </div>
            )}
          </div>

          <div className="menu-foot">
            <BuildStamp />
          </div>
        </div>
      )}
    </div>
  );
}
