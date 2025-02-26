import styles from "./Projects.module.css";
import arrowIcon from "../../assets/arrow-down.svg";
import moviemates from "../../assets/moviemates.bmp";
import breezy from "../../assets/breezy.bmp";
import emerald from "../../assets/emerald.bmp";
import lla from "../../assets/lla.bmp";
import sampleHub from "../../assets/sampleHub.bmp";
import nrby from "../../assets/nrby.bmp";
import { Card } from "../UI/Card";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Moviemates",
    tech: "(React, Redux, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)",
    description:
      "A website which shows you all the latest movies. You can randomize them and choose a movie to watch or leave a comment and check the comments of other users.",
    src: moviemates,
    alt: "moviemates",
    liveUrl: "https://moviemates-website.onrender.com/discover",
    repoUrl: "https://github.com/nrasheva/moviemates-website",
    apiRepoUrl: "https://github.com/nrasheva/moviemates-api",
  },
  {
    title: "Breezy",
    tech: "(Angular, JavaScript, HTML, CSS, Node.js, Express, Mongo, Mongoose)",
    description: "A website where you can check the quality of the air for a selected place. You can check the pollution, the level of pollen, the uv index, etc.",
    src: breezy,
    alt: "breezy",
    liveUrl: "https://breezy-website.onrender.com/#/air-quality",
    repoUrl: "https://github.com/nrasheva/breezy-website",
    apiRepoUrl: "https://github.com/nrasheva/breezy-api",
  },
  {
    title: "Emerald",
    tech: "(JavaScript, HTML, CSS, C#)",
    src: emerald,
    alt: "emerald",
    liveUrl: "https://emerald.beyonddata.bg/",
  },
  {
    title: "LLA score",
    tech: "(JavaScript, HTML, CSS, C#)",
    src: lla,
    alt: "lla",
    liveUrl: "https://llascore.beyonddata.bg/",
  },
  {
    title: "SampleHub",
    tech: "(JavaScript, HTML, CSS, C#)",
    src: sampleHub,
    alt: "sampleHub",
    liveUrl: "https://samplehub.ie/",
  },
  {
    title: "Nrby",
    tech: "(JavaScript, HTML, CSS, C#)",
    src: nrby,
    alt: "nrby",
    liveUrl: "https://linkdev.nrby.com/",
  },
];

export const Projects = () => {
  const projectsRef = useRef(null);
  const messageRef = useRef(null);
  const [emptyLink, setEmptyLink] = useState(false);

  const scrollToRef = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });
  const openLink = (url) => window.open(url, "_blank");
  const openGitLink = (url) => {
    if (!url) {
      setEmptyLink(true);
      setTimeout(() => setEmptyLink(false), 5000);
      scrollToRef(messageRef);
      return;
    }
    openLink(url);
  };

  return (
    <div id="projects" className={styles["projects-main"]}>
      <div className={styles["projects-title"]}>
        <h2>Projects</h2>
        <img ref={messageRef} src={arrowIcon} alt="Down" onClick={() => scrollToRef(projectsRef)} />
      </div>
      {emptyLink && (
        <p style={{ color: "var(--secondary)" }}>
          This project is private. You can only review the web source.
        </p>
      )}
      <div ref={projectsRef} className={styles["projects-content"]}>
        {projects.map(({ title, tech, description, src, alt, liveUrl, repoUrl, apiRepoUrl }) => (
          <Card
            key={title}
            title={title}
            text={tech}
            description={description}
            src={src}
            alt={alt}
            onClick={() => openLink(liveUrl)}
            onClickTitle={() => openGitLink(repoUrl)}
            onClickGit={() => openGitLink(apiRepoUrl)}
          />
        ))}
      </div>
    </div>
  );
};
