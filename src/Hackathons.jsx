import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hackathons.css";

const hackathonData = [
  {
    id: 1,
    title: "Campus Innovation Challenge",
    category: "INNOVATION",
    date: "November 15–16, 2026",
    mode: "Online",
    duration: "24 Hours",
    prize: "₹25,000",
    description:
      "Build innovative solutions for real-world problems and showcase your creativity.",
    theme: "Technology for a Better Future",
    status: "Registration Open",
    icon: "🚀",
  },
  {
    id: 2,
    title: "CodeStorm Hackathon",
    category: "CODING",
    date: "December 05–06, 2026",
    mode: "Offline",
    duration: "36 Hours",
    prize: "₹50,000",
    description:
      "Compete with talented developers and solve challenging programming problems.",
    theme: "Code. Create. Conquer.",
    status: "Coming Soon",
    icon: "💻",
  },
  {
    id: 3,
    title: "AI Future Hackathon",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "December 20–21, 2026",
    mode: "Online",
    duration: "24 Hours",
    prize: "₹30,000",
    description:
      "Explore the power of AI and develop smart solutions using modern technology.",
    theme: "Artificial Intelligence for Everyone",
    status: "Registration Open",
    icon: "🤖",
  },
];

function Hackathons() {
  const navigate = useNavigate();

  const [joinedHackathons, setJoinedHackathons] = useState([]);

  const handleJoin = (hackathon) => {
    if (joinedHackathons.includes(hackathon.id)) {
      alert("You have already joined this hackathon!");
      return;
    }

    setJoinedHackathons((previous) => [
      ...previous,
      hackathon.id,
    ]);

    alert(`${hackathon.title} joined successfully!`);
  };

  return (
    <div className="hackathons-page">
      {/* Header */}
      <header className="hackathons-header">
        <button
          className="hackathons-back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <p className="hackathons-eyebrow">
          CAMPUSCODE / HACKATHON ARENA
        </p>

        <h1>
          Compete, Create & <span>Innovate.</span>
        </h1>

        <p className="hackathons-subtitle">
          Discover exciting hackathons, collaborate with talented
          developers, and turn your ideas into reality.
        </p>
      </header>

      {/* Statistics */}
      <section className="hackathons-stats">
        <div className="hackathon-stat-card">
          <span>AVAILABLE HACKATHONS</span>
          <h2>{hackathonData.length}</h2>
        </div>

        <div className="hackathon-stat-card">
          <span>YOUR PARTICIPATION</span>
          <h2>{joinedHackathons.length}</h2>
        </div>

        <div className="hackathon-stat-card">
          <span>TOTAL PRIZE POOL</span>
          <h2>₹1L+</h2>
        </div>
      </section>

      {/* Hackathons */}
      <section className="hackathons-content">
        <div className="hackathons-section-heading">
          <div>
            <p className="hackathons-eyebrow">
              COMPETE & BUILD
            </p>

            <h2>Explore Hackathons</h2>
          </div>

          <span>
            {hackathonData.length} Events
          </span>
        </div>

        <div className="hackathons-grid">
          {hackathonData.map((hackathon) => {
            const isJoined = joinedHackathons.includes(
              hackathon.id
            );

            return (
              <article
                className="hackathon-card"
                key={hackathon.id}
              >
                <div className="hackathon-card-top">
                  <div className="hackathon-icon">
                    {hackathon.icon}
                  </div>

                  <span
                    className={`hackathon-status ${
                      hackathon.status === "Coming Soon"
                        ? "coming-soon"
                        : ""
                    }`}
                  >
                    {hackathon.status}
                  </span>
                </div>

                <p className="hackathon-category">
                  {hackathon.category}
                </p>

                <h3>{hackathon.title}</h3>

                <p className="hackathon-description">
                  {hackathon.description}
                </p>

                <div className="hackathon-details">
                  <div>
                    <span>📅</span>
                    <p>{hackathon.date}</p>
                  </div>

                  <div>
                    <span>🌐</span>
                    <p>{hackathon.mode}</p>
                  </div>

                  <div>
                    <span>⏱</span>
                    <p>{hackathon.duration}</p>
                  </div>

                  <div>
                    <span>🏆</span>
                    <p>{hackathon.prize} Prize Pool</p>
                  </div>
                </div>

                <div className="hackathon-theme">
                  <span>THEME</span>
                  <p>{hackathon.theme}</p>
                </div>

                <button
                  className={`hackathon-join-button ${
                    isJoined ? "joined" : ""
                  }`}
                  onClick={() => handleJoin(hackathon)}
                  disabled={
                    hackathon.status === "Coming Soon"
                  }
                >
                  {hackathon.status === "Coming Soon"
                    ? "Coming Soon"
                    : isJoined
                    ? "Joined ✓"
                    : "Join Hackathon ↗"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="hackathons-banner">
        <div>
          <p className="hackathons-eyebrow">
            YOUR IDEAS MATTER
          </p>

          <h2>
            Ready to build something amazing?
          </h2>

          <p>
            Take your skills to the next level with CampusCode.
          </p>
        </div>

        <span>💡</span>
      </section>
    </div>
  );
}

export default Hackathons;