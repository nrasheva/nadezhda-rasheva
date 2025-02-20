import { NavLinks } from "./NavLinks";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export const DesktopNavigation = () =>{
    const [navBg, setNavBg] = useState(false);

    const changeNavBackground = () => {
        setNavBg(window.scrollY >= 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBackground);
        return () => {
            window.removeEventListener("scroll", changeNavBackground);
        };
    }, []);

     return (
        <nav className={navBg ? styles.navScrolled : styles["nav-items-desktop"]}>
         <h2 className={styles.logo}>
           Nadya R<span>.</span>
         </h2>
         <NavLinks />
       </nav>
     );
 }
