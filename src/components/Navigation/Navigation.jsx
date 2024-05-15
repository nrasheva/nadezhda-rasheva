import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-items"]}>
        <span style={{ backgroundColor: "red" }}>Nadezhda Rasheva</span>
        <div className={styles["nav-options"]}>
          <span>
            <p>About</p>
          </span>
          <span>
            <p>Projects</p>
          </span>
          <span>
            <p>Contacts</p>
          </span>
        </div>
      </div>
    </nav>
  );
};
