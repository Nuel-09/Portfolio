import { skills } from "../content.js";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Backend Skills</h2>
          <p className="section__subtitle">
            Each skill is backed by a project where I used it.
          </p>
        </header>

        <ul className="skills">
          {skills.map((s, i) => (
            <li key={i} className="skill">
              <span className="skill__name">{s.name}</span>
              {s.project && <span className="skill__project">{s.project}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
