import { profile } from "../content.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          &copy; {year} {profile.name}
        </span>
        <span className="footer__note">Built during the HNG Internship · Backend track</span>
      </div>
    </footer>
  );
}
