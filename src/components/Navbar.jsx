import { useEffect, useState } from "react";
import { sections } from "../App.jsx";
import { profile } from "../content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#profile" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">{initials}</span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`navbar__bars ${open ? "is-open" : ""}`} />
        </button>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
