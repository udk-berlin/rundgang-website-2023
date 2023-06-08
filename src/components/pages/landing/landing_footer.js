import styles from "@/styles/pages/landing/LandingFooter.module.css";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <div className={styles.container}>
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
  );
}
