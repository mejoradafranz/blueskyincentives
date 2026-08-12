import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__brand-mark" aria-hidden="true" />
          <div>
            <div className="footer__name">Blue Sky Incentives</div>
            <div className="footer__tagline">Employee incentive programs, done right.</div>
          </div>
        </div>

        <nav className="footer__links">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>

        <div className="footer__copy">
          © {new Date().getFullYear()} Blue Sky Incentives. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
