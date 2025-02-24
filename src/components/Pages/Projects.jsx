import styles from "./Projects.module.css";
import arrowIcon from "../../assets/arrow-down.svg";
import { Card } from "../UI/Card";
import { useRef } from "react";

export const Projects = () => {
  const projectsRef = useRef(null);

  const GoToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="projects" className={styles["projects-main"]}>
      <div className={styles["projects-title"]}>
        <h2>Projects</h2>
        <img src={arrowIcon} alt="Down" onClick={GoToProjects} />
      </div>
      <div ref={projectsRef} className={styles["projects-content"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
