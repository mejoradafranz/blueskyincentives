import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import "./PortalShell.css";

interface PortalNavItem {
  to: string;
  label: string;
  icon?: ReactNode;
  end?: boolean;
}

export function PortalShell({
  title,
  homeTo,
  navItems,
  background,
}: {
  title: string;
  homeTo?: string;
  navItems: PortalNavItem[];
  background?: ReactNode;
}) {
  const { user, logout } = useAuth();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="portal">
      {navOpen && <div className="portal__backdrop" onClick={() => setNavOpen(false)} />}

      <aside className={`portal__sidebar ${navOpen ? "portal__sidebar--open" : ""}`}>
        <Link to={homeTo ?? "/dashboard"} className="portal__brand" onClick={() => setNavOpen(false)}>
          <span className="portal__brand-mark" aria-hidden="true" />
          Blue Sky Incentives
        </Link>
        <div className="portal__title">{title}</div>
        <nav className="portal__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                `portal__nav-link ${isActive ? "portal__nav-link--active" : ""}`
              }
            >
              {item.icon && (
                <span className="portal__nav-icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="portal__body">
        <header className="portal__topbar">
          <button
            type="button"
            className="portal__nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="portal__user">
            <span className="portal__user-avatar" aria-hidden="true">
              {(user?.firstName?.[0] ?? "?").toUpperCase()}
            </span>
            <span className="portal__user-name">
              {user?.firstName} {user?.lastName}
            </span>
            <button className="portal__logout" onClick={() => logout()}>
              Log out
            </button>
          </div>
        </header>
        <main className="portal__content">
          {background}
          <div className="portal__content-inner">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
