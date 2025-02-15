import { NavLinks } from "./NavLinks";
import styles from "./Navigation.module.css";
import hamburgerIcon from '../../assets/burger-menu-icon.svg';
import closeIcon from "../../assets/close-menu-icon.svg";
import { useState } from "react";

export const MobileNavigation = () =>{
const [showLinks, setShowLinks] = useState(false);

const ShowLinks = () => {
  console.log(showLinks)
  setShowLinks(!showLinks)
}

const hamburger =  <img src={hamburgerIcon} alt="Open menu" className={styles["hamburger-icon"]} onClick={ShowLinks}/>
const closeMenu = <img src={closeIcon} alt="Close menu" className={styles["hamburger-icon"]} onClick={ShowLinks}/>

     return(
      <nav className={styles["nav-items-mobile"]}>
      <h2 className={styles.logo}>NR</h2>
      {showLinks ? closeMenu : hamburger}
      {showLinks && <NavLinks />}
  </nav>
     )
 }