import { NavLinks } from "./NavLinks";
import styles from "./Navigation.module.css";

export const DesktopNavigation = () =>{
     return(
      <nav className={styles["nav-items-desktop"]}>
      <h2 className={styles.logo}>Logo</h2>
      <NavLinks />
  </nav>
     )
 }
