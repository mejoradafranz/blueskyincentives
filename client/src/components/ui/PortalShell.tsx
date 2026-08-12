import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import "./PortalShell.css";

interface PortalNavItem {
  to: string;
  label: string;
}

export function PortalShell({
  title,
  navItems,
}: {
  title: string;
  navItems: PortalNavItem[];
}) {
  const { user, logout } = useAuth();

  return (
    <div className="portal">
      <aside className="portal__sidebar">
        <div className="portal__brand">
          <span className="navbar__brand-mark" aria-hidden="true" />
          Blue Sky Incentives
        </div>
        <div className="portal__title">{title}</div>
        <nav className="portal__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `portal__nav-link ${isActive ? "portal__nav-link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="portal__body">
        <header className="portal__topbar">
          <div />
          <div className="portal__user">
            <span>
              {user?.firstName} {user?.lastName}
            </span>
            <button className="portal__logout" onClick={() => logout()}>
              Log out
            </button>
          </div>
        </header>
        <main className="portal__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
