import styles from "./Card.module.css";
import linkIcon from "../../assets/link-icon.svg";

export const Card = ({text, src, onClick, className}) => {
  return (
    <div
      className={`${styles["card-main"]} ${className || ""}`}
      onClick={onClick}
    >
      <div className={styles["card-image"]}>
      <img src={src}/>
      </div>
      <div className={styles["card-description"]}>
        <div className={styles["card-text"]}>
          <hr />
          <span>{text}</span>
        </div>
        <div className={styles["card-icon"]}>
          <img src={linkIcon} alt="Link" />
        </div>
      </div>
    </div>
  ); 
};