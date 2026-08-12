import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export function NotFound() {
  return (
    <div
      className="container"
      style={{ padding: "96px 24px", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 12 }}>Page not found</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 28 }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
