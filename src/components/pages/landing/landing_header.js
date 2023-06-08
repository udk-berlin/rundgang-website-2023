import styles from "@/styles/pages/landing/LandingHeader.module.css";

export default function LandingHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.rundgang}>UdK Berlin Rundgang </div>
      <div className={styles.date}>21. – 23.07.2023 </div>
    </div>
  );
}
