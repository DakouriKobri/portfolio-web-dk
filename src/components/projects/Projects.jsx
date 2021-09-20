import { useState } from "react";
import Modal from "../modal/Modal";
import ProjectData from "../data/projectData.json";
import "./projects.scss";

export default function Projects({ isOpen, openModal }) {
  const [data] = useState(ProjectData);
  const [id, setId] = useState(0);

  function modalHandler(id) {
    //set Id so modal understands which element to target
    setId(id);

    //Open modal on clicked
    openModal(true);
  }

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="content-wrapper">
        <p>
          Here are the projects I will be running during the Frontend course at
          Novare Potential.
        </p>
        <div className="container">
          {data.map((project) => (
            <div className="card">
              <div
                className={
                  project.isCompleted ? "card-overlay" : "card-overlay active"
                }
              >
                <img
                  className="card-thumbnail"
                  key={project.id}
                  onClick={() => modalHandler(project.id)}
                  src={project.thumbnail}
                  alt={project.title}
                />
                <h3 className="project-status">COMING SOON</h3>
              </div>
              <h3 className="card-title">{project.title}</h3>
            </div>
          ))}
          {data[id]["isCompleted"] && (
            <Modal isOpen={isOpen}>
              <div className="close-btn">
                <button onClick={() => openModal(!isOpen)}>X</button>
              </div>
              <div className="modal-card">
                <div className="modal-thumbnail">
                  <img src={data[id]["thumbnail"]} alt="" />
                </div>
                <h3>{data[id]["title"]}</h3>
                <p>{data[id]["description"]}</p>
                <div className="skills">
                  {data[id]["technologyPills"].map((skills) => (
                    <span key={data[id]["technologyPills"].indexOf(skills)}>
                      {skills}
                    </span>
                  ))}
                </div>
                <div className="btns">
                  <a href={data[id]["hostingLink"]}>
                    <button className="btn-to-web">Visit website/app</button>
                  </a>
                  <a href={data[id]["gitRepositoryLink"]}>
                    <button className="btn-to-repo"> Git repository</button>
                  </a>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
