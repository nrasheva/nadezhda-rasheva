import styles from "./About.module.css";
import webIcon from "../../assets/website-icon.svg";
import appIcon from "../../assets/app-icon.svg";
import languagesIcon from "../../assets/languages-icon.svg";
import skillsIcon from "../../assets/skills-icon.svg";

export const About = () => {
  return (
    <div id="about" className={styles["about-main"]}>
      <div className={styles["about-left"]}>
        <div className={styles["about-left-content"]}>
          <span>
            <img src={webIcon} alt="Website" />
            <p>Website developmet</p>
          </span>
          <span>
            <img src={appIcon} alt="App" />
            <p>App developmet</p>
          </span>
        </div>
      </div>
      <div className={styles["about-right"]}>
        <h2>About me</h2>
        <p>
          An outgoing and positive person, ready to create a great-looking and
          high-functioning solution for you. Always striving for improvement,
          I’m open to new knowledge and fresh ideas!
        </p>
        <ul className={styles["about-right-skills"]}>
          <li>
            <span>
              <img src={languagesIcon} alt="Languages" />
              <h3>Languages</h3>
            </span>
            <p>English, Spanish, Bulgarian</p>
          </li>
          <li>
            <span>
              <img src={skillsIcon} alt="Skills" />
              <h3>Graphic skills</h3>
            </span>
            <p>Adobe Photoshop, Adobe Illustrator, Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
