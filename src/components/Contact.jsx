import { profile } from "../content.js";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container container--narrow">
        <header className="section__head">
          <h2 className="section__title">Contact</h2>
          <p className="section__subtitle">The fastest ways to reach me.</p>
        </header>

        <div className="contact">
          <a className="contact__card" href={`mailto:${profile.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>

          {profile.github && (
            <a className="contact__card" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact__label">GitHub</span>
              <span className="contact__value">{profile.github.replace(/^https?:\/\//, "")}</span>
            </a>
          )}

          {profile.linkedin && (
            <a className="contact__card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">
                {profile.linkedin.replace(/^https?:\/\//, "")}
              </span>
            </a>
          )}

          {profile.twitter && (
            <a className="contact__card" href={profile.twitter} target="_blank" rel="noreferrer">
              <span className="contact__label">Twitter</span>
              <span className="contact__value">{profile.twitter.replace(/^https?:\/\//, "")}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
