import "./about.scss";
import Engineer from "../../assets/engineer.png";

export default function About() {
  return (
    <div className="about" id="about">
      <h2>About me</h2>
      <p>
        Hi! I’m Dakouri, a frontend developer. My years of bioscience research
        skills help me approach software development with strict methodology
        while being open to creativity.
      </p>
      <p>
        I specialize in React and TypeScript and my motto is “clean code”. With
        this website, I showcase my work.
      </p>
      <div className="engineer">
        <img src={Engineer} alt="engineer" />
      </div>
    </div>
  );
}
