import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "WEB DEVELOPMENT",
    difficulty: "Beginner",
    description:
      "Create a personal portfolio website to showcase your skills, projects, and achievements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
  },
  {
    id: 2,
    title: "Student Management System",
    category: "FULL STACK",
    difficulty: "Intermediate",
    description:
      "Build a system to manage student details, attendance, and academic records.",
    technologies: ["React", "Node.js", "Firebase"],
    icon: "🎓",
  },
  {
    id: 3,
    title: "Weather Application",
    category: "WEB DEVELOPMENT",
    difficulty: "Beginner",
    description:
      "Develop a weather application that displays weather information for different cities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🌦️",
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    category: "ARTIFICIAL INTELLIGENCE",
    difficulty: "Advanced",
    description:
      "Create a simple AI-powered chat assistant that responds to user questions.",
    technologies: ["Python", "AI", "API"],
    icon: "🤖",
  },
  {
    id: 5,
    title: "Online Learning Platform",
    category: "FULL STACK",
    difficulty: "Intermediate",
    description:
      "Build a learning platform where students can explore courses and track their progress.",
    technologies: ["React", "Firebase", "CSS"],
    icon: "📚",
  },
  {
    id: 6,
    title: "Expense Tracker",
    category: "APPLICATION",
    difficulty: "Beginner",
    description:
      "Create an application to track daily expenses and manage a personal budget.",
    technologies: ["JavaScript", "React", "CSS"],
    icon: "💰",
  },
];

function Projects() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [startedProjects, setStartedProjects] =
    useState([]);

  const categories = [
    "All",
    "WEB DEVELOPMENT",
    "FULL STACK",
    "ARTIFICIAL INTELLIGENCE",
    "APPLICATION",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter(
          (project) =>
            project.category === selectedCategory
        );

  const handleStartProject = (project) => {
    if (!startedProjects.includes(project.id)) {
      setStartedProjects((previous) => [
        ...previous,
        project.id,
      ]);
    }

    alert(
      `${project.title} added to your projects!`
    );
  };

  return (
    <div className="projects-page">
      <header className="projects-header">
        <button
          className="projects-back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <p className="projects-eyebrow">
          CAMPUSCODE / PROJECT HUB
        </p>

        <h1>
          Build Something <span>Amazing.</span>
        </h1>

        <p className="projects-subtitle">
          Explore projects, learn new technologies,
          and turn your ideas into reality.
        </p>
      </header>

      <section className="projects-stats">
        <div className="projects-stat-card">
          <span>AVAILABLE PROJECTS</span>
          <h2>{projectData.length}</h2>
        </div>

        <div className="projects-stat-card">
          <span>PROJECTS STARTED</span>
          <h2>{startedProjects.length}</h2>
        </div>

        <div className="projects-stat-card">
          <span>TECHNOLOGIES</span>
          <h2>12+</h2>
        </div>
      </section>

      <section className="projects-content">
        <div className="projects-section-heading">
          <div>
            <p className="projects-eyebrow">
              LEARN BY BUILDING
            </p>

            <h2>Explore Projects</h2>
          </div>

          <span className="projects-count">
            {filteredProjects.length} Projects
          </span>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "project-filter active"
                  : "project-filter"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-card-top">
                <div className="project-card-icon">
                  {project.icon}
                </div>

                <span
                  className={`project-difficulty ${project.difficulty.toLowerCase()}`}
                >
                  {project.difficulty}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <button
                className="project-start-button"
                onClick={() =>
                  handleStartProject(project)
                }
              >
                {startedProjects.includes(project.id)
                  ? "Project Started ✓"
                  : "Start Project ↗"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;