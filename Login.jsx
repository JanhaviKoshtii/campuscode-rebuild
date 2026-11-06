
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      window.location.href = "/dashboard";
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Email kiwa password chukicha aahe.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Khup attempts zale. Thodya velane try kar.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-top">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-box">CC</span>

          <span>
            CAMPUSCODE
            <small>HACKATHON ARENA</small>
          </span>
        </Link>

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-label">WELCOME BACK / 001</p>

          <h1>
            ENTER THE
            <br />
            <span>ARENA.</span>
          </h1>

          <p className="auth-description">
            Login to continue building, competing and connecting.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL ADDRESS</label>

            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">PASSWORD</label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading ? "LOGGING IN..." : "LOGIN TO CAMPUSCODE ↗"}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>

      <div className="auth-footer">
        © 2026 CAMPUSCODE. BUILT FOR STUDENTS.
      </div>
    </div>
  );
}

export default Login;
