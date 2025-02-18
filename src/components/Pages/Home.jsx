import { MainButton } from "../UI/Button";
import styles from "./Home.module.css";
import buttonStyles from "../UI/Button.module.css";

export const Home = () => {

  function ContactClick() {
    alert("Got a project");
  }

  function DownloadResume() {
    alert("Download Resume");
  }

  return (
     <div className={styles["home-main"]}>
      <div className={styles["home-content"]}>
        <div className={styles["home-left-content"]}>
        <div className={styles["home-text"]}>
        <h3>Hello<span>.</span></h3>
        <p className={styles["shifted-text"]}><span>_______________________________</span> I am Nadya</p>
        <h3>Web developer</h3>
        </div>
        <div className={styles["home-buttons"]}>
          <MainButton text="Got a project" onClick={ContactClick} className={buttonStyles["filled-button"]}/>
          <MainButton text="My resume" onClick={DownloadResume} className={buttonStyles["border-button"]} />
        </div>
        </div>
        <div className={styles["home-photo"]}>
          Text
        </div>
      </div>
      <div className={styles["home-line"]}>
      Text
      </div>
      </div>
  ) 
};
