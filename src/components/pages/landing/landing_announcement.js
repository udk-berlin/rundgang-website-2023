import styles from "@/styles/pages/landing/LandingAnnouncement.module.css";

export default function LandingAnnouncement() {
  return (
    <div className={styles.container}>
      <div>
        Hier wird ab dem 5.07.2023 das Programm des Rundgang 2023
        veröffentlicht.<br></br>
        &rarr;
        <a
          href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/"
          target="_blank"
        >
          &nbsp;Allgemeine Informationen zum Rundgang 2023
        </a>
        <br></br>
        &rarr;
        <a href="https://2022.rundgang.udk-berlin.de" target="_blank">
          &nbsp;zur Rundgang Plattform 2022
        </a>
      </div>
    </div>
  );
}
