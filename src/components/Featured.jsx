import { featured } from "../content.js";

export default function Featured() {
  return (
    <section id="featured" className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Featured Project Deep Dive</h2>
          <p className="section__subtitle">{featured.projectName}</p>
        </header>

        {featured.summary && <p className="featured__summary">{featured.summary}</p>}

        <div className="featured">
          <div className="featured__block">
            <h3 className="featured__heading">The Problem</h3>
            <p>{featured.problem}</p>
          </div>

          <div className="featured__block">
            <h3 className="featured__heading">Architecture &amp; Request Flow</h3>
            <p>{featured.architecture}</p>
          </div>

          {featured.endpoints?.length > 0 && (
            <div className="featured__block">
              <h3 className="featured__heading">Key Endpoints</h3>
              <ul className="endpoints">
                {featured.endpoints.map((e, i) => (
                  <li key={i} className="endpoint">
                    <span className={`endpoint__method m-${e.method.toLowerCase()}`}>
                      {e.method}
                    </span>
                    <code className="endpoint__path">{e.path}</code>
                    <span className="endpoint__purpose">{e.purpose}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="featured__block">
            <h3 className="featured__heading">Technical Challenge</h3>
            <p>{featured.challenge}</p>
          </div>

          <div className="featured__block">
            <h3 className="featured__heading">How I Solved It</h3>
            <p>{featured.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
