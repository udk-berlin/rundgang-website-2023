import FooterLanding from "./landing_footer";
import HeaderLanding from "./landing_header";
import styles from "@/styles/pages/landing/LandingLayout.module.css";
import Announcement from "./landing_announcement";

export default function LandingLayout({ children }) {
  return (
    <div className={styles.container}>
      <HeaderLanding />
      <Announcement />
      <FooterLanding />
    </div>
  );
}
