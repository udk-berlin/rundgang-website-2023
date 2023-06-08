import Layout from "@/components/layout/layout";
import StaticLayout from "@/components/layout/static_layout";
import { StaticTitle } from "./faq";

export default function Imprint() {
  return (
    <Layout>
      <StaticLayout>
        <StaticTitle>Impressum</StaticTitle>
        <div>
          <p>
            Universität der Künste Berlin<br></br>
            Körperschaft des öffentlichen Rechts<br></br>
            gesetzlich vertreten durch den Präsidenten Prof. Dr. Norbert Palz
            <br></br>
            Einsteinufer 43<br></br>
            D-10587 Berlin<br></br>
            Telefon: 030/3185-0 <br></br>
          </p>
          <p>
            Umsatzsteuer-Identifikationsnummer:DE811403316 <br></br>
            Rechtsaufsicht: Senatsverwaltung für Wissenschaft, Gesundheit,
            Pflege und Gleichstellung
          </p>
          <p>
            Entwicklung: Medienhaus-Team ([Vorname Nachname, Mailadresse])
            Gestaltung: [Vorname Nachname 1], [Vorname Nachname 2], [Vorname
            Nachname 3] Redaktion: Stabsstelle Überfakultäre Veranstaltungen
            [Vorname Nachname, Mailadresse]
          </p>
          <p>
            Die redaktionelle Verantwortung der Programmunterseiten liegt bei
            den Mitwirkenden selbst. Die zuständigen Ansprechpartner*innen sind
            auf den Programmunterseiten genannt. Programminhalte werden laufend
            durch ihre Redakteur*innen aktualisiert.
          </p>{" "}
          <p>
            {" "}
            Hinweis<br></br>
            Die Universität der Künste (UdK) Berlin übernimmt keine Gewähr für
            die Aktualität, Richtigkeit und Vollständigkeit der auf dieser
            Website bereitgestellten Angaben. Dies gilt im besonderen Maße für
            die Inhalte externer Internetseiten, auf die über Hyperlinks direkt
            oder indirekt verwiesen wird und die von der UdK Berlin nicht
            beeinflusst werden können. Die von den Rundgang-Mitwirkenden
            unterbreiteten Angebote unterliegen der Verantwortung der jeweiligen
            Bereiche und Mitwirkenden.
          </p>
          <p>
            Der Inhalt dieser Website ist urheberrechtlich geschützt. Die
            Vervielfältigung oder Verbreitung der auf dieser Seite bereit
            gestellten Informationen bedarf der vorherigen schriftlichen
            Genehmigung durch die UdK Berlin.
          </p>
        </div>
      </StaticLayout>
    </Layout>
  );
}
