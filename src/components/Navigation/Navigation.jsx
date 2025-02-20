import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
      <div className={styles.nav}>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    );
};
