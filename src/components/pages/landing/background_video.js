import styles from "@/styles/pages/landing/BackgroundVideo.module.css";

export default function BackgroundVideo() {
  return (
    <video className={styles.container} autoPlay muted loop playsInline>
      <source src={"/assets/media/background_video1.webm"} type="video/webm" />
    </video>
  );
}
