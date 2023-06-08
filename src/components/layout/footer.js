import Link from "next/link";
import styles from "@/styles/layout/Footer.module.css";
import Slider from "./slider";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div className={styles.rundgang}>
        <Link href="/program"> UdK Berlin Rundgang</Link>
      </div>
      <div className={styles.static}>
        <div className={styles.contact}>
          <Link href="/contact">Kontakt</Link>
        </div>
        <div className={styles.imprint}>
          <Link href="/imprint">Impressum</Link>
        </div>
        <div className={styles.faq}>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  );
}
