import { useIntl } from "react-intl";

import StaticLayout, {
  StaticLayoutParagraph,
} from "@/components/layout/static_layout";
import Layout from "@/components/layout/layout";

const IMPRINT = {
  de: [
    {
      titles: [],
      texts: [
        { text: "Universität der Künste Berlin" },
        { text: "Körperschaft des öffentlichen Rechts" },
        {
          text: "gesetzlich vertreten durch den Präsidenten Prof. Dr. Norbert Palz",
        },
        { text: "Einsteinufer 43" },
        { text: "D-10587 Berlin" },
        { text: "Telefon: 030/3185-0" },
      ],
    },
    {
      titles: [],
      texts: [
        { text: "Umsatzsteuer-Identifikationsnummer: DE811403316" },
        {
          text: "Rechtsaufsicht: Senatsverwaltung für Wissenschaft, Gesundheit, Pflege und Gleichstellung",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "Entwicklung: udk/spaces",
        },
        {
          text: "Gestaltung: Marisa Nest, Juan Pablo Gaviria Bedoya, Lukas Esser",
        },
        {
          text: "Redaktion: Stabsstelle Überfakultäre Veranstaltungen",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "Die redaktionelle Verantwortung der Programmunterseiten liegt bei den Mitwirkenden selbst. Die zuständigen Ansprechpartner*innen sind auf den Programmunterseiten genannt. Programminhalte werden laufend durch ihre Redakteur*innen aktualisiert.",
        },
      ],
    },
    {
      titles: ["Hinweis"],
      texts: [
        {
          text: "Die Universität der Künste (UdK) Berlin übernimmt keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der auf dieser Website bereitgestellten Angaben. Dies gilt im besonderen Maße für die Inhalte externer Internetseiten, auf die über Hyperlinks direkt oder indirekt verwiesen wird und die von der UdK Berlin nicht beeinflusst werden können. Die von den Rundgang-Mitwirkenden unterbreiteten Angebote unterliegen der Verantwortung der jeweiligen Bereiche und Mitwirkenden.",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "Der Inhalt dieser Website ist urheberrechtlich geschützt. Die Vervielfältigung oder Verbreitung der auf dieser Seite bereit gestellten Informationen bedarf der vorherigen schriftlichen Genehmigung durch die UdK Berlin.",
        },
      ],
    },
  ],
  en: [
    {
      titles: [],
      texts: [
        { text: "Berlin University of the Arts" },
        { text: "Corporation under public law" },
        {
          text: "legally represented by the President Prof. Dr. Norbert Palz",
        },
        { text: "Einsteinufer 43" },
        { text: "D-10587 Berlin" },
        { text: "Phone: 030/3185-0" },
      ],
    },
    {
      titles: [],
      texts: [
        { text: "Sales tax identification number: DE811403316" },
        {
          text: "Legal supervision: Senate Department for Science, Health, Care and Equality",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "Development: udk/spaces",
        },
        {
          text: "Design: Marisa Nest, Juan Pablo Gaviria Bedoya, Lukas Esser",
        },
        {
          text: "Editing: Department for Interfaculty Events ",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "The editorial responsibility for the program subpages lies with the contributors themselves. The responsible contact persons are named on the program subpages. Program content is continuously updated by their editors.",
        },
      ],
    },
    {
      titles: ["Note"],
      texts: [
        {
          text: "The Berlin University of the Arts (UdK) does not guarantee that the information provided on this website is up-to-date, correct, or complete. This applies in particular to the content of external websites that are referred to directly or indirectly via hyperlinks and over which the UdK Berlin has no control. The offers made by the Rundgang contributors are the responsibility of the respective areas and participants.",
        },
      ],
    },
    {
      titles: [],
      texts: [
        {
          text: "The content of this website is protected by copyright. The reproduction or distribution of the information provided on this site requires the prior written consent of the UdK Berlin.",
        },
      ],
    },
  ],
};

export default function Imprint() {
  const language = useIntl();

  let imprint = IMPRINT.de;
  if (language.locale === "en" && "en" in IMPRINT) imprint = IMPRINT.en;

  return (
    <Layout>
      <StaticLayout title={"imprint"}>
        <div>
          {imprint.map((imprint) => (
            <StaticLayoutParagraph content={imprint} />
          ))}
        </div>
      </StaticLayout>
    </Layout>
  );
}
