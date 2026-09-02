import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { INDUSTRIES } from "../../data/industries";
import { WatchDemoModal } from "./WatchDemoModal";
import "./Navbar.css";

const LINKS_BEFORE = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "The Incentives" },
];

const LINKS_AFTER = [{ to: "/integrations", label: "Integrations" }];

const CALL_NUMBER = "+15551234567";
const CALL_NUMBER_DISPLAY = "(555) 123-4567";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [watchDemoOpen, setWatchDemoOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isOnIndustries = location.pathname.startsWith("/industries");

  useEffect(() => {
    setIndustriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeAll() {
    setMenuOpen(false);
    setIndustriesOpen(false);
  }

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <NavLink to="/" className="navbar__brand" onClick={closeAll}>
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
            {LINKS_BEFORE.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                onClick={closeAll}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="navbar__dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`navbar__link navbar__dropdown-trigger ${
                  isOnIndustries ? "navbar__link--active" : ""
                }`}
                aria-expanded={industriesOpen}
                onClick={() => setIndustriesOpen((open) => !open)}
              >
                Industries
                <span
                  className={`navbar__dropdown-chevron ${
                    industriesOpen ? "navbar__dropdown-chevron--open" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div className={`navbar__dropdown-panel ${industriesOpen ? "navbar__dropdown-panel--open" : ""}`}>
                {INDUSTRIES.map((industry) => (
                  <NavLink
                    key={industry.slug}
                    to={`/industries/${industry.slug}`}
                    className={({ isActive }) =>
                      `navbar__dropdown-link ${isActive ? "navbar__dropdown-link--active" : ""}`
                    }
                    onClick={closeAll}
                  >
                    {industry.navLabel}
                  </NavLink>
                ))}
                <NavLink
                  to="/industries"
                  end
                  className={({ isActive }) =>
                    `navbar__dropdown-link navbar__dropdown-link--all ${isActive ? "navbar__dropdown-link--active" : ""}`
                  }
                  onClick={closeAll}
                >
                  All Industries &amp; Use Cases
                </NavLink>
              </div>
            </div>

            {LINKS_AFTER.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                onClick={closeAll}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              className="navbar__link navbar__watch-demo"
              onClick={() => {
                closeAll();
                setWatchDemoOpen(true);
              }}
            >
              <span className="navbar__watch-demo-dot" aria-hidden="true" />
              Watch Demo
            </button>

            <div className="navbar__actions">
              <a
                href={`tel:${CALL_NUMBER}`}
                className="navbar__call"
                onClick={closeAll}
              >
                <span className="navbar__call-icon" aria-hidden="true" />
                {CALL_NUMBER_DISPLAY}
              </a>
              <NavLink to="/contact" className="navbar__cta" onClick={closeAll}>
                Start Risk-Free
              </NavLink>
              <NavLink to="/login" className="navbar__login" onClick={closeAll}>
                Log in
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      {watchDemoOpen && <WatchDemoModal onClose={() => setWatchDemoOpen(false)} />}
    </>
  );
}
