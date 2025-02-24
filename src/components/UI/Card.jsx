import styles from "./Card.module.css";
import linkIcon from "../../assets/link-icon.svg";
import gitIcon from "../../assets/git-icon.svg";

export const Card = ({ text, title, src, onClick, onClickTitle, onClickGit, className }) => {
  
  return (
    <div className={`${styles["card-main"]} ${className || ""}`}>
      <div className={styles["card-image"]}>
        <img src={src} />
      </div>
      <div className={styles["card-description"]}>
        <div className={styles["card-text"]}>
          <hr />
          <span>
            <p onClick={onClickTitle}>{title}</p>
            <p>{text}</p>
          </span>
        </div>
        <div className={styles["card-icon"]}>
          <img src={linkIcon} alt="Link" onClick={onClick} />
          <img src={gitIcon} alt="GitHub" onClick={onClickGit} />
        </div>
      </div>
    </div>
  );
};
