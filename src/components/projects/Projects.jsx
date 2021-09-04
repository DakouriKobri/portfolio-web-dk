import { useState } from "react";
import "./projects.scss";
import projectData from "../../projectData.json";

export default function Projects() {
  const [isCompleted, setIsCompleted] = useState(false);

  // sample element
  <div className={isCompleted ? null : "classname"}></div>;
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <p>
        Here are the projects I will be running during the Frontend course at
        Novare Potential.
      </p>
      <div className="container">
        {projectData.map((project) => (
          <div className="card" key={project.id}>
            <div className={project.isCompleted ? null : "card-overlay"}>
              <img
                className="card-thumbnail"
                src={project.thumbnail}
                alt={project.title}
              />
              <h3 className="project-status">COMING SOON</h3>
            </div>
            <h3 className="card-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
// {project.isCompleted ?} "card card-overlay card-thumbnail project-status card-title": "card card-overlay:hover card-thumbnail project-status card-title"}
// "card card-overlay card-thumbnail project-status card-title":
// "card card-overlay:hover card-thumbnail project-status card-title"}
// {project.isCompleted ? "card-overlay disable" : "card-overlay"}
