import Layout from "@/components/layout/layout";
import StaticLayout from "@/components/layout/static_layout";
import styles from "@/styles/pages/Contact.module.css";
import { StaticTitle } from "./faq";

export default function Contact() {
  return (
    <>
      <Layout>
        <StaticLayout>
          <StaticTitle>Kontakt</StaticTitle>
          <div className={styles.container}>
            <p>
              Der Rundgang – Tage der offenen Tür ist eine Veranstaltung der
              Universität der Künste Berlin, vertreten durch den Präsidenten
              Prof. Dr. Norbert Palz.{" "}
            </p>
            <p>
              Veranstaltungsleitung & Veranstaltungskoordination<br></br>Die
              diensthabende Veranstaltungsleitung ist an den Rundgang-Tagen
              erreichbar unter der Dienstnummer: [Nummer]
            </p>
            <p>
              Referat Bau und Liegenschaften<br></br>[Vorname Nachname 1,
              Mailadresse]
              <br></br>[Vorname Nachname 2, Mailadresse]<br></br>[Vorname
              Nachname 3, Mailadresse]
            </p>
            <p>
              Stabsstelle Überfakultäre Veranstaltungen<br></br>Anne-Marie Franz
              <br></br>Mona Völkel<br></br>Kim Füllgraf<br></br>
            </p>
            <p>
              Presse- und Öffentlichkeitsarbeit / Social Media<br></br>
              Stabsstelle Presse und Öffentlichkeitsarbeit<br></br>[Vorname
              Nachname 1, Mailadresse]<br></br>[Vorname Nachname 2, Mailadresse]
              <br></br>
              [Vorname Nachname 3, Mailadresse]
            </p>
            <p>
              Registrierung für UdK Berlin-Angehörige<br></br>[Link Pretix]
              <br></br>Fragen zum Ticketing beantwortet der FAQ Rundgang
              <br></br>
              [Link FAQ Rundgang]
            </p>
            <p>
              <br></br>Rundgang AG<br></br>[Vorname Nachname 1, Mailadresse]
              <br></br>
              [Vorname Nachname 2, Mailadresse]
            </p>
            <p>
              <br></br>Safe Space<br></br>[Vorname Nachname, Mailadresse]
            </p>
            <p>
              <br></br>Awareness<br></br>[Name Firma, ggf. Vorname Nachname,
              Mailadresse]
            </p>
            <p>
              Sicherheit<br></br>[Name Firma, ggf. Vorname Nachname,
              Mailadresse]
            </p>
            <p>
              <br></br>UdK:Shop<br></br>[Vorname Nachname, Mailadresse]
            </p>
            <p>
              <br></br>Ansprechpartner*innen der Fakultäten und Zentren<br></br>
              <br></br>Fakultät Bildende Kunst<br></br>Akiko Benhöft<br></br>
              Kilian Seyfried
            </p>
            <p>
              Fakultät Gestaltung<br></br>Juliane Aleithe <br></br>Klaus
              Gasteier <br></br>Brigitte Weingart <br></br>Michael Häfner{" "}
              <br></br>
              Matthias Noell <br></br>Manja Ebert <br></br>Ernst August Gräfe{" "}
            </p>
            <p>
              Fakultät Musik <br></br>Harry Curtis <br></br>Sofie Hoyer{" "}
              <br></br>
              Celine Kodim
            </p>
            <p>
              Fakultät Darstellende Kunst <br></br>Patrick Reu{" "}
            </p>
            <p>
              Zentralinstitut für Weiterbildung (ZIW)<br></br>Kathrin Rusch{" "}
              <br></br>
              Stefanie Schwarz{" "}
            </p>
            <p>
              Zentralinstitut für Weiterbildung (ZIW) / Studiengang Sound
              Studies and Sonic Arts (M.A.)<br></br>Germaine Png{" "}
            </p>
            <p>
              Hochschulübergreifendes Zentrum Tanz Berlin<br></br>Nik Haffner{" "}
              <br></br>Sabine Trautwein{" "}
            </p>
            <p>
              Jazz-Institut Berlin<br></br>Christoph Undisz <br></br>Paulo
              Morello <br></br>Céline Rudolph <br></br>Gert Müller{" "}
            </p>
            <p>
              Referat Bau und Liegenschaften, Veranstaltungssäle<br></br>Robert
              Priebs <br></br>Malwine Kurella
            </p>
          </div>
        </StaticLayout>
      </Layout>
    </>
  );
}
