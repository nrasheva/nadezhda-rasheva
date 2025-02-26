import styles from "./Contacts.module.css";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import instaIcon from "../../assets/insta-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import { useState, forwardRef } from "react";

const contacts = [
  { icon: emailIcon, text: "nadezhda.rasheva96@gmail.com", url: "mailto:{nadezhda.rasheva96@gmail.com}" },
  { icon: phoneIcon, text: "+359-88-9948940", url: "tel:+359889948940" },
  {
    icon: instaIcon,
    text: "@nadezhdarasheva",
    url: "https://www.instagram.com/nadezhdarasheva/",
  },
  {
    icon: linkedinIcon,
    text: "Nadezhda Rasheva",
    url: "https://bg.linkedin.com/in/nadezhda-rasheva?trk=people-guest_people_search-card",
  },
];

export const Contacts = forwardRef((props, ref) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleAction = (text, isCopyable, url) => {
    if (isCopyable) {
      navigator.clipboard.writeText(text).then(() => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
      });
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div ref={ref} id="contact" className={styles["contacts-main"]}>
      <div className={styles["contacts-title"]}>
        <h2>Contacts</h2>
      </div>
      <div className={styles["contacts-content"]}>
        {copyStatus && (
          <p
            style={{
              color: "var(--secondary)",
              fontSize: "14px",
              position: "absolute",
              marginTop: "-30px",
              marginLeft: "30px",
            }}
          >
            Copied to clipboard!
          </p>
        )}
        {contacts.map(({ icon, text, isCopyable, url }, index) => (
          <div key={index} onClick={() => handleAction(text, isCopyable, url)}>
            <img src={icon} alt={text} />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

Contacts.displayName = "Contacts";
