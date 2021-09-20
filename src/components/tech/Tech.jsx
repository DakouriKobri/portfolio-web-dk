import { techData } from "../../data/techData";
import "./tech.scss";

const myTechData = techData();

export default function Tech() {
  return (
    <div className="tech" id="tech">
      <h2>Technologies I use</h2>
      <div className="content-wrapper">
        <p>
          Here are the technologies that I already know alongside others I am
          currently learning.
        </p>
        <div className="container">
          {myTechData.map((myTech) => (
            <div className="tech-card" key={myTech.id}>
              <img src={myTech.icon} alt={myTech.name} />
              <label>{myTech.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
