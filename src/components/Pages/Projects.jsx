import styles from "./Projects.module.css";
import arrowIcon from "../../assets/arrow-down.svg";
import moviemates from "../../assets/moviemates.png";
import breezy from "../../assets/breezy.png";

import { Card } from "../UI/Card";
import { useRef } from "react";

export const Projects = () => {
  const projectsRef = useRef(null);

  const GoToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const OpenLink = (url) => {
    window.open(url, "_blank");
  };

  const OpenGitLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className={styles["projects-main"]}>
      <div className={styles["projects-title"]}>
        <h2>Projects</h2>
        <img src={arrowIcon} alt="Down" onClick={GoToProjects} />
      </div>
      <div ref={projectsRef} className={styles["projects-content"]}>
        <Card title="Moviemates" text="(React, Redux, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)" src={moviemates} onClick={() => OpenLink("https://moviemates-website.onrender.com/discover")} 
          onClickTitle={() => OpenGitLink("https://github.com/nrasheva/moviemates-website")}  onClickGit={() => OpenGitLink("https://github.com/nrasheva/moviemates-api")}  />
        <Card title="Breezy" text="(Angular, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)" src={breezy} onClick={() => OpenLink("https://breezy-website.onrender.com/#/air-quality")} 
          onClickTitle={() => OpenGitLink("https://github.com/nrasheva/breezy-website")}  onClickGit={() => OpenGitLink("https://github.com/nrasheva/breezy-api")} />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
