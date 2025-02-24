import styles from "./Navigation.module.css";
import { useState } from "react";

export const NavLinks = () =>{
const [activeLink, setActiveLink] = useState('/#home');

const handleClick = (href) => {
    setActiveLink(href);
  };

  return(
    <div className={styles["nav-options"]}>
      <ul>
        {[
          { name: "Home", href: "/#home" },
          { name: "About", href: "/#about" },
          { name: "Projects", href: "/#projects" },
          { name: "Contacts", href: "/#contact" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={activeLink === link.href ? styles.active : ""}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};