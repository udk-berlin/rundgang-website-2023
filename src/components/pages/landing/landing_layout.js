import styles from "@/styles/pages/landing/LandingLayout.module.css";

import LandingAnnouncement from "@/components/pages/landing/landing_announcement";
import LandingFooter from "@/components/pages/landing/landing_footer";
import LandingHeader from "@/components/pages/landing/landing_header";

export default function LandingLayout() {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <LandingAnnouncement />
      <LandingFooter />
    </div>
  );
}
