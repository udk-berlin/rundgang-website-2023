import styles from "@/styles/pages/landing/LandingLayout.module.css";

import Div100vh from "react-div-100vh";

import LandingAnnouncement from "@/components/pages/landing/landing_announcement";
import LandingFooter from "@/components/pages/landing/landing_footer";
import LandingHeader from "@/components/pages/landing/landing_header";

export default function LandingLayout() {
  return (
    <Div100vh className={styles.container}>
      <LandingHeader />
      <LandingAnnouncement />
      <LandingFooter />
    </Div100vh>
  );
}
