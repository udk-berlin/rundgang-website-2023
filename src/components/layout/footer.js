import Link from "next/link";
import styles from "@/styles/layout/Footer.module.css";
import Slider from "./slider";
import { HoverLink } from "../hoverLink";
import styled from "styled-components";

// const FooterHoverLink = styled(HoverLink)`
//   text-align: center;
//   font-weight: 600;
//   font-size: 1.2rem;
// `;

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <HoverLink>
        <Link href="/program">
          <div className={styles.rundgang}> UdK Berlin Rundgang</div>
        </Link>
      </HoverLink>
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
