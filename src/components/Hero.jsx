import { profile } from "../content.js";

export default function Hero() {
  return (
    <section id="profile" className="section hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">{profile.title}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__bio">{profile.bio}</p>

        <ul className="hero__meta">
          <li>
            <span className="hero__meta-label">Location</span>
            {profile.location}
          </li>
          <li>
            <span className="hero__meta-label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in Touch
          </a>
        </div>

        <div className="hero__socials">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          )}
          {profile.resume && (
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
