import styles from "@/styles/pages/landing/LandingFooter.module.css";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Link
          href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/kontakt/1"
          target="_blank"
        >
          Kontakt
        </Link>
      </div>
      <div className={styles.imprint}>
        <Link
          href="https://www.udk-berlin.de/schnellzugriff/impressum/"
          target="_blank"
        >
          Impressum
        </Link>
      </div>
    </div>
  );
}
