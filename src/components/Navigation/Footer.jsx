import styles from "./Footer.module.css";

export const Footer = () => {

  return (
    <div className={styles["footer-main"]}>
      <span>&copy; {new Date().getFullYear()} - All right reserved, web development - Nadezhda Rasheva</span>
    </div>
  );
};
