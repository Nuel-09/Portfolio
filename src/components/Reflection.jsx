import { reflection } from "../content.js";

export default function Reflection() {
  const paragraphs = Array.isArray(reflection) ? reflection : [reflection];

  return (
    <section id="reflection" className="section section--alt">
      <div className="container container--narrow">
        <header className="section__head">
          <h2 className="section__title">Learning Reflection</h2>
          <p className="section__subtitle">
            What I learned and how I grew as a backend developer.
          </p>
        </header>

        <div className="prose">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
