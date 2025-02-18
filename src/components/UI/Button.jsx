import styles from "./Button.module.css";

export const MainButton = ({text, onClick, className}) => {
  return (
    <div className={`${styles["button-main"]} ${className || ""}`} onClick={onClick}>
      <p>{text}</p>
      </div>
  ) 
};