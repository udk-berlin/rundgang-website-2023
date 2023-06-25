import styles from "@/styles/pages/landing/LandingAnnouncement.module.css";
import styled from "styled-components";

export default function LandingAnnouncement() {
  return (
    <div className={styles.container}>
      <div>
        Hier wird ab dem 5.07.2023 das Programm des Rundgang 2023
        veröffentlicht.
        <ArrowLink>
          <span>&rarr;&nbsp;</span>
          <a
            href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/"
            target="_blank"
          >
            Allgemeine Informationen zum Rundgang 2023
          </a>
        </ArrowLink>
        <ArrowLink>
          <span>&rarr;&nbsp;</span>
          <a href="https://2022.rundgang.udk-berlin.de" target="_blank">
            &nbsp;zur Rundgang-Plattform 2022
          </a>
        </ArrowLink>
      </div>
    </div>
  );
}

const ArrowLink = styled.div`
  display: flex;

  & > a:hover {
    text-decoration: underline;
  }
`;
