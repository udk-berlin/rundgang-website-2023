import styles from "@/styles/pages/landing/LandingLayout.module.css";

import FooterLanding from "./landing_footer";
import HeaderLanding from "./landing_header";
import LandingMenu from "./landing_menu";

export default function LandingLayout() {
  return (
    <div className={styles.container}>
      <HeaderLanding />
      <LandingMenu />
      <FooterLanding />
    </div>
  );
}
