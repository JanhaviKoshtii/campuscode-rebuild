import { useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Dashboard.css";

const courses = [
  {
    id: "web",
    icon: "</>",
    category: "WEB DEVELOPMENT",
    title: "Full Stack Development",
    description:
      "Learn HTML, CSS, JavaScript, React and backend development.",
    progress: 65,
  },
  {
    id: "c",
    icon: "💻",
    category: "PROGRAMMING",
    title: "C Programming",
    description:
      "Learn programming fundamentals using the C language.",
    progress: 30,
  },
  {
    id: "cpp",
    icon: "⚙️",
    category: "PROGRAMMING",
    title: "C++ Programming",
    description:
      "Learn object-oriented programming with C++.",
    progress: 42,
  },
  {
    id: "python",
    icon: "🐍",
    category: "PROGRAMMING",
    title: "Python Programming",
    description:
      "Learn Python for programming, automation and AI.",
    progress: 28,
  },
  {
    id: "java",
    icon: "☕",
    category: "PROGRAMMING",
    title: "Java Programming",
    description:
      "Learn Java concepts and develop applications.",
    progress: 20,
  },
  {
    id: "dsa",
    icon: "🧠",
    category: "PROBLEM SOLVING",
    title: "Data Structures & Algorithms",
    description:
      "Improve problem-solving skills with DSA and coding challenges.",
    progress: 42,
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const user = auth.currentUser;

  const [userName, setUserName] = useState(
    user?.displayName || ""
  );

  const [userEmail] = useState(user?.email || "");

  const [showNameForm, setShowNameForm] = useState(false);

  const [newName, setNewName] = useState("");

  const avatarLetter = userName
    ? userName.charAt(0).toUpperCase()
    : "S";

  // Update Student Name
  const handleUpdateName = async (e) => {
    e.preventDefault();

    const trimmedName = newName.trim();

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    try {
      if (!auth.currentUser) {
        alert("Please login again.");
        return;
      }

      await updateProfile(auth.currentUser, {
        displayName: trimmedName,
      });

      setUserName(trimmedName);

      setNewName("");

      setShowNameForm(false);

      alert("Your name has been updated successfully!");
    } catch (error) {
      console.error("Name update error:", error);

      alert("Unable to update name. Please try again.");
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);

      alert("Logout failed. Please try again.");
    }
  };

  // Open Course Details
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}

      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <span className="logo-mark">C</span>

          <span>CampusCode</span>
        </div>

        <p className="sidebar-label">MENU</p>

        <nav className="sidebar-nav">
          <a href="#dashboard-home" className="active">
            <span>▦</span> Dashboard
          </a>

          <a href="#courses">
            <span>▤</span> My Courses
          </a>

          <a href="#practice">
            <span>⌘</span> Coding Practice
          </a>

          <button
            type="button"
            className="sidebar-link"
            onClick={() => navigate("/hackathons")}
          >
            <span>♜</span>
            Hackathons
          </button>

          <button
            type="button"
            onClick={() => 
              navigate("/projects")
            }
          >
            Explore ↗
          </button>

          
        </nav>

        <div className="sidebar-bottom">
          <a href="#profile">
            <span>◉</span> My Profile
          </a>

          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            <span>↪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}

      <main className="dashboard-main" id="dashboard-home">
        {/* Header */}

        <header className="dashboard-header">
          <div>
            <p className="dashboard-date">
              CAMPUSCODE / STUDENT PORTAL
            </p>

            <h1>
              Welcome back,{" "}
              <span>{userName || "Student"}!</span>
            </h1>

            <p className="dashboard-subtitle">
              Keep learning, keep building, and keep moving forward.
            </p>
          </div>

          {/* Profile */}

          <div className="dashboard-user" id="profile">
            <div className="user-avatar">
              {avatarLetter}
            </div>

            <div>
              <strong>
                {userName || "Student"}
              </strong>

              <p>{userEmail}</p>

              <button
                type="button"
                onClick={() =>
                  setShowNameForm(!showNameForm)
                }
              >
                {userName ? "Edit Name" : "Add Your Name"}
              </button>

              {showNameForm && (
                <form onSubmit={handleUpdateName}>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={newName}
                    onChange={(e) =>
                      setNewName(e.target.value)
                    }
                    required
                  />

                  <button type="submit">
                    Save Name
                  </button>
                </form>
              )}
            </div>
          </div>
        </header>

        {/* Statistics */}

        <section className="dashboard-stats">
          <div className="stat-card">
            <p>COURSES ENROLLED</p>

            <h2>06</h2>

            <span>Keep learning</span>
          </div>

          <div className="stat-card">
            <p>PROBLEMS SOLVED</p>

            <h2>128</h2>

            <span>Build your streak</span>
          </div>

          <div className="stat-card">
            <p>PROJECTS</p>

            <h2>06</h2>

            <span>Ideas into reality</span>
          </div>

          <div className="stat-card">
            <p>ACHIEVEMENTS</p>

            <h2>12</h2>

            <span>You're doing great</span>
          </div>
        </section>

        {/* Courses */}

        <section
          className="dashboard-section"
          id="courses"
        >
          <div className="section-heading">
            <div>
              <p className="dashboard-date">
                YOUR LEARNING
              </p>

              <h2>My Courses</h2>
            </div>

            <a href="#courses">
              View all ↗
            </a>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <div
                className="course-card"
                key={course.id}
              >
                <div className="course-icon">
                  {course.icon}
                </div>

                <p className="course-category">
                  {course.category}
                </p>

                <h3>{course.title}</h3>

                <p className="course-description">
                  {course.description}
                </p>

                <div className="progress-info">
                  <span>Progress</span>

                  <strong>
                    {course.progress}%
                  </strong>
                </div>

                <div className="progress-bar">
                  <div
                    style={{
                      width: `${course.progress}%`,
                    }}
                  ></div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCourseClick(course.id)
                  }
                >
                  Continue Learning ↗
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Practice */}

        <section
          className="dashboard-section"
          id="practice"
        >
          <div className="section-heading">
            <div>
              <p className="dashboard-date">
                LEVEL UP YOUR SKILLS
              </p>

              <h2>Coding Practice</h2>
            </div>

            <a href="#practice">
              Explore problems ↗
            </a>
          </div>

          <div className="practice-card">
            <div>
              <span className="practice-tag">
                DAILY CHALLENGE
              </span>

              <h3>
                Ready to solve today's problem?
              </h3>

              <p>
                Practice coding every day and improve
                your problem-solving skills.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/coding-practice")}
            >
              Start Practicing ↗
            </button>
          </div>
        </section>

        {/* Hackathons and Projects */}

        <section className="dashboard-bottom">
          {/* Hackathons */}

          <div
            className="dashboard-section"
            id="hackathons"
          >
            <div className="section-heading">
              <div>
                <p className="dashboard-date">
                  COMPETE & CREATE
                </p>

                <h2>Hackathons</h2>
              </div>
            </div>

            <div className="small-info-card">
              <span className="live-dot"></span>

              <div>
                <h3>
                  Campus Innovation Challenge
                </h3>

                <p>Registration is open</p>
              </div>

              <button
              type="button"
              className="join-hackathon-btn"
              onClick={() => navigate("/hackathons")}
            >
              Join ↗
            </button>
            </div>
          </div>

          {/* Projects */}

          <div
            className="dashboard-section"
            id="projects"
          >
            <div className="section-heading">
              <div>
                <p className="dashboard-date">
                  BUILD YOUR PORTFOLIO
                </p>

                <h2>Projects</h2>
              </div>
            </div>

            <div className="small-info-card">
              <span className="project-icon">
                ◈
              </span>

              <div>
                <h3>Student Project Hub</h3>

                <p>
                  Start building something new
                </p>
              </div>

              <button
              type="button"
              className="join-hackathon-btn"
              onClick={() => navigate("/projects")}
            >
              Explore ↗
            </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;