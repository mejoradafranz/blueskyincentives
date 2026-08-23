import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "The Incentives" },
  { to: "/industries", label: "Industries" },
  { to: "/integrations", label: "Integrations" },
  { to: "/demo", label: "Watch Demo" },
];

const CALL_NUMBER = "+15551234567";
const CALL_NUMBER_DISPLAY = "(555) 123-4567";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar__brand-mark" aria-hidden="true" />
          Blue Sky Incentives
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__actions">
            <a
              href={`tel:${CALL_NUMBER}`}
              className="navbar__call"
              onClick={() => setMenuOpen(false)}
            >
              <span className="navbar__call-icon" aria-hidden="true" />
              {CALL_NUMBER_DISPLAY}
            </a>
            <NavLink to="/contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
              Start Risk-Free
            </NavLink>
            <NavLink to="/login" className="navbar__login" onClick={() => setMenuOpen(false)}>
              Log in
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
