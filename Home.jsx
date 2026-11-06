import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">CC</span>
          <div>
            <h3>CAMPUSCODE</h3>
            <p>RECREATION ARENA</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#how">HOW IT WORKS</a>
          <a href="#hackathons">HACKATHONS</a>
          <a href="#community">COMMUNITY</a>
        </div>

        <div className="nav-actions">
            <Link to="/login" className="login-link">
                LOGIN
            </Link>

            <Link to="/register" className="join-btn">
                JOIN CAMPUSCODE ↗
            </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-top">
          <span className="status-dot"></span>
          THE DIGITAL HOME FOR STUDENT INNOVATION
        </div>

        <div className="hero-content">
          <p className="section-number">CAMPUSCODE / 001</p>

          <h1>
            BUILD
            <span className="outline-text">COMPETE</span>
            SHIP<span className="dot">.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              A digital arena for students
              <br />
              who don't just have ideas.
              <br />
              They build them.
            </p>

            <a href="#hackathons" className="explore-btn">
              EXPLORE HACKATHONS ↗
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>SCROLL TO EXPLORE ↓</span>
          <span>01 / 05</span>
        </div>

      </section>

      {/* About Section */}
      <section className="about-section" id="about">

        <div className="section-label">
          <span>01</span>
          <span>WHAT IS CAMPUSCODE?</span>
        </div>

        <div className="about-content">
          <h2>
            WHERE
            <br />
            STUDENTS
            <br />
            <span className="outline-text">BUILD.</span>
          </h2>

          <p>
            CampusCode brings students, teams, organizers and
            hackathons into one connected ecosystem.
          </p>
        </div>

      </section>

      {/* How It Works */}
      <section className="how-section" id="how">

        <div className="section-label">
          <span>02</span>
          <span>HOW IT WORKS</span>
        </div>

        <h2 className="center-heading">
          BUILD
          <br />
          TOGETHER.
        </h2>

        <div className="steps">

          <div className="step-card">
            <span>01</span>
            <h3>DISCOVER</h3>
            <p>Find a challenge that makes you want to build.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>TEAM UP</h3>
            <p>Find people who share your ambition.</p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>BUILD</h3>
            <p>Turn your idea into something people can use.</p>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>SHIP</h3>
            <p>Submit your work and take it to the arena.</p>
          </div>

        </div>

      </section>

      {/* Hackathons */}
      <section className="hackathon-section" id="hackathons">

        <div className="section-label">
          <span>03</span>
          <span>ENTER THE ARENA</span>
        </div>

        <div className="hackathon-list">

          <div className="hackathon-item">
            <span>01</span>
            <h3>AI INNOVATION</h3>
            <p>Build intelligent solutions for problems that matter.</p>
            <span className="live-status">● LIVE</span>
            <span>↗</span>
          </div>

          <div className="hackathon-item">
            <span>02</span>
            <h3>FUTURE WEB</h3>
            <p>Design and ship the next generation of digital experiences.</p>
            <span className="open-status">● OPEN</span>
            <span>↗</span>
          </div>

          <div className="hackathon-item">
            <span>03</span>
            <h3>CAMPUS TECH</h3>
            <p>Create technology that makes student life better.</p>
            <span className="upcoming-status">● UPCOMING</span>
            <span>↗</span>
          </div>

        </div>

      </section>

      {/* Community */}
      <section className="community-section" id="community">

        <p className="section-number">THE NETWORK</p>

        <h2>
          FIND
          <br />
          YOUR
          <br />
          <span className="outline-text">PEOPLE.</span>
        </h2>

        <p className="community-description">
          Build with developers.
          <br />
          Think with designers.
          <br />
          Compete with builders.
        </p>

      </section>

      {/* Final CTA */}
      <section className="final-section" id="join">

        <p>READY?</p>

        <h2>
          YOUR NEXT
          <br />
          <span className="outline-text">PROJECT</span>
          <br />
          STARTS HERE.
        </h2>

        <a href="#login" className="final-btn">
          JOIN CAMPUSCODE ↗
        </a>

      </section>

      {/* Footer */}
      {/* Professional Footer */}

    <footer className="footer" id="footer">

      <div className="footer-container">

    {/* Brand Section */}
    <div className="footer-brand">
      <div className="footer-logo">
        <span className="footer-logo-icon">CC</span>

        <div>
          <h3>CAMPUSCODE</h3>
          <span>HACKATHON ARENA</span>
        </div>
      </div>

      <p>
        The student hackathon arena.
        <br />
        You build the idea,
        <br />
        we run the competition.
      </p>

      <div className="system-status">
        <span className="status-dot"></span>
        ALL SYSTEMS OPERATIONAL
      </div>
    </div>

    {/* Product Links */}
    <div className="footer-column">
      <h4>PRODUCT</h4>
      <a href="#about">About</a>
      <a href="#hackathons">Hackathons</a>
      <a href="#how">How it works</a>
      <a href="#community">Community</a>
    </div>

    {/* Builders Links */}
    <div className="footer-column">
      <h4>BUILDERS</h4>
      <a href="#students">Students</a>
      <a href="#teams">Teams</a>
      <a href="#organizers">Organizers</a>
      <a href="#developers">Developers</a>
    </div>

    {/* Guides Links */}
    <div className="footer-column">
      <h4>GUIDES</h4>
      <a href="#rules">Hackathon Rules</a>
      <a href="#faq">FAQ</a>
      <a href="#support">Support</a>
      <a href="#contact">Contact</a>
    </div>

      </div>

    {/* Footer Bottom */}
      <div className="footer-bottom">

    <div className="footer-legal">
      <a href="#terms">TERMS</a>
      <a href="#privacy">PRIVACY</a>
      <a href="#contact">CONTACT</a>
    </div>

    <p>© 2026 CAMPUSCODE. BUILT FOR STUDENTS.</p>

    <a href="#about" className="back-to-top">
      BACK TO TOP ↑
    </a>

      </div>

    {/* Background Text */}

      <div className="footer-background-text">
        CAMPUSCODE
      </div>

    </footer>

    </div>
  );
}

export default App;