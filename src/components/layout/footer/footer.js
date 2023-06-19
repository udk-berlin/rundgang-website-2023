import { FormattedMessage } from "react-intl";
import styles from "@/styles/layout/Footer.module.css";

import { HoverLink } from "@/components/hover_link";
import SliderContainer from "@/components/layout/footer/slider";

import {
  ProgramLink,
  ContactLink,
  ImprintLink,
  FaqLink,
} from "@/components/localization/links";

export default function Footer({ updateState }) {
  return (
    <div className={styles.container}>
      <div>
        <SliderContainer updateState={updateState} />
      </div>
      <Title />
      <InfoPages />
    </div>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <HoverLink href="/program">UdK Berlin Rundgang</HoverLink>
    </div>
  );
}

function InfoPages() {
  return (
    <div className={styles.infoPages}>
      <ContactLink>
        <FormattedMessage id={"contact"} />
      </ContactLink>
      <ImprintLink>
        <FormattedMessage id={"imprint"} />
      </ImprintLink>
      <FaqLink>
        <FormattedMessage id={"faq"} />
      </FaqLink>
    </div>
  );
}
