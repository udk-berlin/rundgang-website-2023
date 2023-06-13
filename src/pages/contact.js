import Layout from "@/components/layout/layout";
import StaticLayout from "@/components/layout/static_layout";
import {ContactParagraph} from "@/components/pages/contact";

const CONTACTS = {
  de: [
    { titles: ["Der Rundgang – Tage der offenen Tür ist eine Veranstaltung der Universität der Künste Berlin, vertreten durch den Präsidenten Prof. Dr. Norbert Palz."], texts : [] },
    { titles: ["Veranstaltungsleitung & Veranstaltungskoordination"], texts : ["Die diensthabende Veranstaltungsleitung ist an den Rundgang-Tagen erreichbar unter der Dienstnummer: [Nummer]"] },
    { titles: ["Referat Bau und Liegenschaften"], texts : ["[Vorname Nachname, Mailadresse]", "[Vorname Nachname, Mailadresse]", "[Vorname Nachname, Mailadresse]"] },
    { titles: ["Stabsstelle Überfakultäre Veranstaltungen"], texts : ["Anne-Marie Franz", "Mona Völkel", "Kim Füllgraf"] },
    { titles: ["Presse- und Öffentlichkeitsarbeit / Social Media", "Stabsstelle Presse und Öffentlichkeitsarbeit"], texts : ["[Vorname Nachname, Mailadresse]", "[Vorname Nachname, Mailadresse]", "[Vorname Nachname, Mailadresse]"] },
    { titles: ["Registrierung für UdK Berlin-Angehörige"], texts : ["[Link Pretix]", "Fragen zum Ticketing beantwortet der FAQ Rundgang", "[Link FAQ Rundgang]"] },
    { titles: ["Rundgang AG"], texts : ["[Vorname Nachname, Mailadresse]", "[Vorname Nachname, Mailadresse]"] },
    { titles: ["Safe Space"], texts : ["[Vorname Nachname, Mailadresse]"] },
    { titles: ["Awareness"], texts : ["[Name Firma, ggf. Vorname Nachname, Mailadresse]"] },
    { titles: ["Sicherheit"], texts : ["[Name Firma, ggf. Vorname Nachname, Mailadresse]"] },
    { titles: ["UdK:Shop"], texts : ["[Vorname Nachname, Mailadresse]"] },
    { titles: ["Ansprechpartner*innen der Fakultäten und Zentren"], texts : [] },
    { titles: ["Fakultät Bildende Kunst"], texts : ["Akiko Benhöft", "Kilian Seyfried"] },
    { titles: ["Fakultät Gestaltung"], texts : ["Juliane Aleithe", "Klaus Gasteier", "Brigitte Weingart", "Michael Häfner", "Matthias Noell", "Manja Ebert", "Ernst August Gräfe"] },
    { titles: ["Fakultät Musik"], texts : ["Harry Curtis", "Sofie Hoyer", "Celine Kodim"] },
    { titles: ["Fakultät Darstellende Kunst"], texts : ["atrick Reu"] },
    { titles: ["Zentralinstitut für Weiterbildung (ZIW)"], texts : ["Kathrin Rusch", "Stefanie Schwarz"] },
    { titles: ["Zentralinstitut für Weiterbildung (ZIW) / Studiengang Sound Studies and Sonic Arts (M.A.)"], texts : ["Germaine Png"] },
    { titles: ["Hochschulübergreifendes Zentrum Tanz Berlin"], texts : ["Nik Haffner", "Sabine Trautwein"] },
    { titles: ["Jazz-Institut Berlin"], texts : ["Christoph Undisz", "Paulo Morello", "Céline Rudolph", "Gert Müller"] },
    { titles: ["Referat Bau und Liegenschaften, Veranstaltungssäle"], texts : ["Robert Priebs", "Malwine Kurella"] },
  ]
}

export default function Contact() {
  const contacts = CONTACTS.de

  return (
      <Layout>
        <StaticLayout title={'Kontakt'}>
          <div>{contacts.map(contact => <ContactParagraph contact={contact}/> )}</div>
        </StaticLayout>
      </Layout>
  );
}
