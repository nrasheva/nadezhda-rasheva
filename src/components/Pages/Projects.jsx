import styles from "./Projects.module.css";
import arrowIcon from "../../assets/arrow-down.svg";
import moviemates from "../../assets/moviemates.png";
import breezy from "../../assets/breezy.png";
import emerald from "../../assets/emerald.png";
import lla from "../../assets/lla.png";
import sampleHub from "../../assets/sampleHub.png";
import nrby from "../../assets/nrby.png";

import { Card } from "../UI/Card";
import { useRef, useState } from "react";

export const Projects = () => {
  const projectsRef = useRef(null);
  const privateMessageRef = useRef(null); 
  const [emptyLink, setEmptyLink] = useState(false);

  const GoToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const OpenLink = (url) => {
    window.open(url, "_blank");
  };

  const OpenGitLink = (url) => {
    if(url == "") {
      setEmptyLink(true);
      setTimeout(() => setEmptyLink(false), 5000);
      privateMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className={styles["projects-main"]}>
      <div className={styles["projects-title"]}>
        <h2>Projects</h2>
        <img ref={privateMessageRef} src={arrowIcon} alt="Down" onClick={GoToProjects} />
      </div>
      {emptyLink && <p style={{color: "var(--secondary)"}}>This project is private. You can only review the web source.</p>}
      <div ref={projectsRef} className={styles["projects-content"]}>
        <Card title="Moviemates" text="(React, Redux, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)" src={moviemates} onClick={() => OpenLink("https://moviemates-website.onrender.com/discover")} 
          onClickTitle={() => OpenGitLink("https://github.com/nrasheva/moviemates-website")}  onClickGit={() => OpenGitLink("https://github.com/nrasheva/moviemates-api")}  />
        <Card title="Breezy" text="(Angular, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)" src={breezy} onClick={() => OpenLink("https://breezy-website.onrender.com/#/air-quality")} 
          onClickTitle={() => OpenGitLink("https://github.com/nrasheva/breezy-website")}  onClickGit={() => OpenGitLink("https://github.com/nrasheva/breezy-api")} />
        <Card title="Emerald" text="(JavaScript, HTML, CSS, C#)" src={emerald} onClick={() => OpenLink("https://emerald.beyonddata.bg/")} 
          onClickTitle={() => OpenGitLink("")}  onClickGit={() => OpenGitLink("")}  />
        <Card title="LLA score" text="(JavaScript, HTML, CSS, C#)" src={lla} onClick={() => OpenLink("https://llascore.beyonddata.bg/")} 
          onClickTitle={() => OpenGitLink("")}  onClickGit={() => OpenGitLink("")}  />
         <Card title="SampleHub" text="(JavaScript, HTML, CSS, C#)" src={sampleHub} onClick={() => OpenLink("https://samplehub.ie/")} 
          onClickTitle={() => OpenGitLink("")}  onClickGit={() => OpenGitLink("")}  />
        <Card title="Nrby" text="(JavaScript, HTML, CSS, C#)" src={nrby} onClick={() => OpenLink("https://linkdev.nrby.com/")} 
          onClickTitle={() => OpenGitLink("")}  onClickGit={() => OpenGitLink("")}  />
      </div>
    </div>
  );
};
