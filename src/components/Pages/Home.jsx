import { MainButton } from "../UI/Button";
import styles from "./Home.module.css";
import buttonStyles from "../UI/Button.module.css";
import photo from "../../assets/photo.png";

export const Home = ({ contactRef }) => {
  const handleScrollToContact = () => contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleDownloadResume = () => alert("Download Resume");

  return (
    <div id="home" className={styles["home-main"]}>
      <div className={styles["home-content"]}>
        <div className={styles["home-left-content"]}>
          <div className={styles["home-text"]}>
            <h3>
              Hello<span>.</span>
            </h3>
            <p className={styles["shifted-text"]}>
              <span>_______________________________</span> I am Nadya
            </p>
            <h3>Web developer</h3>
          </div>
          <div className={styles["home-buttons"]}>
            <MainButton text="Got a project?" onClick={handleScrollToContact} className={buttonStyles["filled-button"]} />
            <MainButton text="My resume" onClick={handleDownloadResume} className={buttonStyles["border-button"]} />
          </div>
        </div>
        <div className={styles["home-photo"]}>
          <img className={styles["photo-field"]} src={photo} alt="Profile" />
        </div>
      </div>
      <div className={styles["home-line"]}>
        {[["HTML", "CSS", "JavaScript"], ["C#", "React", "React-Native", "Angular"], ["Node.js", "Express", "Nest.js"]].map((group, index) => (
          <ul key={index}>{group.map((tech) => (<li key={tech}>{tech}</li>))}</ul>
        ))}
      </div>
    </div>
  );
};