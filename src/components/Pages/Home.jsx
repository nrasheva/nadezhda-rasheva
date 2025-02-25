import { MainButton } from "../UI/Button";
import styles from "./Home.module.css";
import buttonStyles from "../UI/Button.module.css";
import photo from "../../assets/photo.png";

export const Home = ({ contactRef }) => {
  
  function ContactClick() {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function DownloadResume() {
    alert("Download Resume");
  }

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
            <MainButton
              text="Got a project"
              onClick={ContactClick}
              className={buttonStyles["filled-button"]}
            />
            <MainButton
              text="My resume"
              onClick={DownloadResume}
              className={buttonStyles["border-button"]}
            />
          </div>
        </div>
        <div className={styles["home-photo"]}>
          <img className={styles["photo-field"]} src={photo} />
        </div>
      </div>
      <div className={styles["home-line"]}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          <li>C#</li>
          <li>React</li>
          <li>React-Native</li>
          <li>Angular</li>
        </ul>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Nest.js</li>
        </ul>
      </div>
    </div>
  ); 
};
