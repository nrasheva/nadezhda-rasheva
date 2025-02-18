import styles from "./Navigation.module.css";

export const NavLinks = () =>{
  return(
    <div className={styles["nav-options"]}>
      <ul>
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="/#about">About</a>
          </li>
          <li>
              <a href="/#about">Projects</a>
          </li>
          <li>
              <a href="/#contact">Contacts</a>
          </li>
      </ul>
      </div>
  )
}