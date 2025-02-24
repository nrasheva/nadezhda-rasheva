import styles from "./Contacts.module.css";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import instaIcon from "../../assets/insta-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import { useState } from "react";

export const Contacts = () => {
  const [copyStatus, setCopyStatus] = useState(false);

 const OpenMedia = (url) => {
  window.open(url, "_blank");
 }

 const CopyContact = (text) => {
  navigator.clipboard.writeText(text)
  .then(() => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  })
  .catch((err) => {
    console.error("Failed to copy text: ", err);
  });
};

  return (
    <div id="contact" className={styles["contacts-main"]}>
      <div className={styles["contacts-title"]}>
        <h2>Contacts</h2>
      </div>
      <div className={styles["contacts-content"]}>
        <div>
          <img src={emailIcon} alt="Email" />
          <p onClick={(e) => CopyContact(e.target.textContent)}>nadezhda.rasheva96@gmail.com</p>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone number" />
          <p onClick={(e) => CopyContact(e.target.textContent)}>+359-88-9948940</p>
        </div>
        <div>
          <img src={instaIcon} alt="Instagram" />
          <p
            onClick={() =>
              OpenMedia("https://www.instagram.com/nadezhdarasheva/")
            }
          >
            @nadezhdarasheva
          </p>
        </div>
        <div>
          <img src={linkedinIcon} alt="LinkedIn" />
          <p
            onClick={() =>
              OpenMedia(
                "https://bg.linkedin.com/in/nadezhda-rasheva?trk=people-guest_people_search-card"
              )
            }
          >
            Nadezhda Rasheva
          </p>
        </div>
      </div>
      {copyStatus && <p style={{color: "var(--secondary)", fontSize: "14px"}}>Copied to clipboard!</p>}
    </div>
  );
};
