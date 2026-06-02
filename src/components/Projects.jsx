import { projects } from "../content.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">HNG Projects</h2>
          <p className="section__subtitle">
            Every significant project I built during the internship.
          </p>
        </header>

        <div className="grid grid--cards">
          {projects.map((p, i) => (
            <article key={i} className="card">
              {p.image && (
                <div className="card__media">
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                </div>
              )}
              <div className="card__body">
                <h3 className="card__title">{p.name}</h3>
                <p className="card__desc">{p.description}</p>

                {p.contribution && (
                  <p className="card__contrib">
                    <span className="card__label">What I built</span>
                    {p.contribution}
                  </p>
                )}

                {p.stack?.length > 0 && (
                  <ul className="chips">
                    {p.stack.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                {(p.repo || p.demo) && (
                  <div className="card__links">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
