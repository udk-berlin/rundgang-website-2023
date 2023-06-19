import { FormattedMessage } from "react-intl";
import styles from '@/styles/layout/Footer.module.css'

import Slider from '@/components/layout/slider'
import { HoverLink } from '@/components/hover_link'
import { LocalizedLink } from "@/components/localization/links";

export default function Footer() {
  return (
    <div className={styles.container}>
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  );
}

function FooterLeft() {
  return (
    <div>
      <SliderContainer />
    </div>
  );
}

function FooterCenter() {
  return (
    <HoverLink>
      <LocalizedLink href="/program">
        <div className={styles.center}> UdK Berlin Rundgang</div>
      </LocalizedLink>
    </HoverLink>
  );
}

function FooterRight() {
  const links = [
    { href: "/contact", id: "contact" },
    { href: "/imprint", id: "imprint" },
    { href: "/faq", id: "faq" },
  ];

  return (
    <div className={styles.right}>
      {links.map((link) => {
        return (
          <LocalizedLink href={link.href}>
            <FormattedMessage id={link.id} />
          </LocalizedLink>
        );
      })}
    </div>
  );
}
