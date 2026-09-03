import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { ApiError } from "../../api/client";
import { Button } from "../../components/ui/Button";
import "./Login.css";

export function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
      const redirectTo = (location.state as { from?: string } | null)?.from ?? "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <div className="login__brand-mark" aria-hidden="true" />
        <h1 className="login__title">Sign in</h1>
        <p className="login__subtitle">Sign in to your Blue Sky Incentives member dashboard.</p>

        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="login__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        {error && <div className="login__error">{error}</div>}

        <Button type="submit" disabled={isSubmitting} style={{ width: "100%", marginTop: 8 }}>
          {isSubmitting ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
