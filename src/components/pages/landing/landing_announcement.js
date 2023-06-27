import styles from "@/styles/pages/landing/LandingAnnouncement.module.css";
import styled from "styled-components";

export default function LandingAnnouncement() {
  return (
    <div className={styles.container}>
      <div>
        Hier wird ab dem 5. Juli das Programm des Rundgang 2023 veröffentlicht.
        <ArrowLink>
          <a
            href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/"
            target="_blank"
          >
            Allgemeine Informationen zum Rundgang 2023
          </a>
        </ArrowLink>
        <ArrowLink>
          <a href="https://2022.rundgang.udk-berlin.de" target="_blank">
            Zum Programm des Rundgang 2022
          </a>
        </ArrowLink>
      </div>
    </div>
  );
}

const ArrowLink = styled.div`
  &::before {
    content: '→ ';
    position: relative;
    top: -1px;
    margin-right: 5px;
  }

  & > a:hover {
    text-decoration: underline;
  }
`;
