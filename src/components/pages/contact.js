import { useIntl } from "react-intl";

import StaticLayout, {
  StaticLayoutParagraph,
} from "@/components/layout/static_layout";
import Layout from "@/components/layout/layout";

const CONTACTS = {
  de: [
    {
      titles: [
        "Der Rundgang – Tage der offenen Tür ist eine Veranstaltung der Universität der Künste Berlin, vertreten durch den Präsidenten Prof. Dr. Norbert Palz. ",
      ],
      texts: [],
    },
    {
      titles: ["Veranstaltungsleitung & Veranstaltungskoordination"],
      texts: [
        {
          text: "Die diensthabende Veranstaltungsleitung ist an den Rundgang-Tagen erreichbar unter der Dienstnummer:",
        },
        { text: <i>Die Nummer wird zum Rundgang veröffentlicht.</i> },
      ],
    },
    {
      titles: ["Veranstaltungsleitung"],
      texts: [
        {
          text: "Felix Wolf, Referat Bau und Liegenschaften",
          link: "https://www.udk-berlin.de/person/felix-wolf/",
        },
      ],
    },
    {
      titles: ["Stabsstelle Überfakultäre Veranstaltungen"],
      texts: [
        {
          text: "Anne-Marie Franz",
          link: "https://www.udk-berlin.de/person/anne-marie-franz/",
        },
        {
          text: "Mona Völkel",
          link: "https://www.udk-berlin.de/person/mona-voelkel/",
        },
        {
          text: "Kim Füllgraf",
          link: "https://www.udk-berlin.de/person/kim-fuellgraf/",
        },
      ],
    },
    {
      titles: ["Presse- und Öffentlichkeitsarbeit"],
      texts: [
        {
          text: "Stabsstelle Presse/Kommunikation",
          link: "https://www.udk-berlin.de/service/stabsstelle-presse-kommunikation/",
        },
        {
          text: "Claudia Assmann",
          link: "https://www.udk-berlin.de/person/claudia-assmann/",
        },
        {
          text: "Anna Roth",
          link: "https://www.udk-berlin.de/person/anna-maria-roth/",
        },
        {
          text: "Marie Igelmann",
          link: "https://www.udk-berlin.de/person/marie-irene-igelmann/",
        },
      ],
    },
    {
      titles: ["Social Media"],
      texts: [
        {
          text: "Stabsstelle Presse/Kommunikation",
          link: "https://www.udk-berlin.de/service/stabsstelle-presse-kommunikation/",
        },
        {
          text: "socialmedia@udk-berlin.de",
          link: "mailto:socialmedia@udk-berlin.de",
        },
      ],
    },
    {
      titles: ["Registrierung für UdK Berlin-Angehörige"],
      texts: [
        {
          text: <i>Der Link wird Anfang Juli hier veröffentlicht.</i>,
        },
        {
          text: "Fragen zum Ticketing werden hier beantwortet",
        },
        {
          text: <i>Der Link wird Anfang Juli hier veröffentlicht.</i>,
        },
      ],
    },
    {
      titles: ["Rundgang AG"],
    },
    {
      titles: ["Safe Space"],
      texts: [
        {
          text: "Karyna Yarmolynskak",
        },
        {
          text: "yarmolynska@udk-berlin.de",
          link: "mailto:yarmolynska@udk-berlin.de",
        },
      ],
    },
    {
      titles: ["Awareness"],
      texts: [
        {
          text: "Access Netzwerk ",
        },
      ],
    },
    {
      titles: ["Sicherheit"],
      texts: [
        {
          text: "Boretti Solutions GmbH",
        },
      ],
    },
    {
      titles: ["UdK:Shop"],
      texts: [
        {
          text: "Stabsstelle Strategisches Marketing",
          link: "https://www.udk-berlin.de/universitaet/stabsstelle-strategisches-marketing/daten-zur-udk-berlin/",
        },
      ],
    },
    { titles: [] },
    { titles: ["Ansprechpartner*innen der Fakultäten und Zentren"], texts: [] },
    {
      titles: ["Fakultät Bildende Kunst"],
      texts: [
        {
          text: "Akiko Benhöft",
          link: "https://www.udk-berlin.de/person/akiko-bernhoeft/",
        },
        {
          text: "Kilian Seyfried",
          link: "https://www.udk-berlin.de/person/kilian-seyfried/",
        },
      ],
    },
    {
      titles: ["Fakultät Gestaltung"],
      texts: [
        {
          text: "Juliane Aleithe",
          link: "https://www.udk-berlin.de/person/juliane-aleithe/",
        },
        {
          text: "Klaus Gasteier",
          link: "https://www.udk-berlin.de/person/klaus-gasteier/",
        },
        {
          text: "Brigitte Weingart",
          link: "https://www.udk-berlin.de/person/brigitte-weingart/",
        },
        {
          text: "Michael Häfner",
          link: "https://www.udk-berlin.de/person/michael-haefner/",
        },
        {
          text: "Matthias Noell",
          link: "https://www.udk-berlin.de/person/matthias-noell/",
        },
        {
          text: "Manja Ebert",
          link: "https://www.udk-berlin.de/person/manja-ebert/",
        },
        {
          text: "Ernst August Gräfe",
        },
      ],
    },
    {
      titles: ["Fakultät Musik"],
      texts: [
        {
          text: "Harry Curtis",
          link: "https://www.udk-berlin.de/person/harry-curtis/",
        },
        {
          text: "Sofie Hoyer",
        },
        {
          text: "Celine Kodim",
          link: "https://www.udk-berlin.de/person/celine-kodim/",
        },
      ],
    },
    {
      titles: ["Fakultät Darstellende Kunst"],
      texts: [
        {
          text: "Patrick Reu",
          link: "https://www.udk-berlin.de/person/patrick-reu/",
        },
      ],
    },
    {
      titles: ["Berlin Career College"],
      texts: [
        {
          text: "Kathrin Rusch",
          link: "https://www.udk-berlin.de/person/kathrin-rusch/",
        },
        {
          text: "Stefanie Schwarz",
          link: "https://www.udk-berlin.de/person/stephanie-schwarz/",
        },
      ],
    },
    {
      titles: [
        "Berlin Career College / Studiengang Sound Studies and Sonic Arts (M.A.)",
      ],
      texts: [
        {
          text: "Germaine Png",
        },
      ],
    },
    {
      titles: ["Berlin Career College / Artist Training"],
      texts: [
        {
          text: "Melanie Waldheim",
          link: "https://www.udk-berlin.de/person/melanie-waldheim/",
        },
      ],
    },
    {
      titles: ["Hochschulübergreifendes Zentrum Tanz Berlin"],
      texts: [
        {
          text: "Nik Haffner",
          link: "https://www.udk-berlin.de/person/nik-haffner/",
        },
        {
          text: "Sabine Trautwein",
          link: "https://www.udk-berlin.de/person/sabine-trautwein/",
        },
      ],
    },
    {
      titles: ["Jazz-Institut Berlin"],
      texts: [
        {
          text: "Christoph Undisz",
        },
        {
          text: "Paulo Morello",
          link: "https://www.udk-berlin.de/person/paulo-morello/",
        },
        {
          text: "Céline Rudolph",
        },
        {
          text: "Gert Müller",
        },
      ],
    },
    {
      titles: ["Referat Bau und Liegenschaften, Veranstaltungssäle"],
      texts: [
        {
          text: "Robert Priebs",
        },
        {
          text: "Malwine Kurella",
        },
      ],
    },
  ],
  en: [
    {
      titles: [
        "Rundgang - Open Days is an event of the Berlin University of the Arts, represented by the President Prof. Dr. Norbert Palz.",
      ],
      texts: [],
    },
    {
      titles: ["Event Management & Event Coordination"],
      texts: [
        {
          text: "The event manager on duty during the Rundgang can be reached at the service number: ",
        },
        { text: <i>The number will be published before the Rundgang.</i> },
      ],
    },
    {
      titles: ["Event management"],
      texts: [
        {
          text: "Felix Wolf, Department for Construction and Property Management",
          link: "https://www.udk-berlin.de/person/felix-wolf/",
        },
      ],
    },
    {
      titles: ["Team Interfaculty Events"],
      texts: [
        {
          text: "Anne-Marie Franz",
          link: "https://www.udk-berlin.de/person/anne-marie-franz/",
        },
        {
          text: "Mona Völkel",
          link: "https://www.udk-berlin.de/person/mona-voelkel/",
        },
        {
          text: "Kim Füllgraf",
          link: "https://www.udk-berlin.de/person/kim-fuellgraf/",
        },
      ],
    },
    {
      titles: ["Press / Communications"],
      texts: [
        {
          text: "Team Press / Communications",
          link: "https://www.udk-berlin.de/service/stabsstelle-presse-kommunikation/",
        },
        {
          text: "Claudia Assmann",
          link: "https://www.udk-berlin.de/person/claudia-assmann/",
        },
        {
          text: "Anna Roth",
          link: "https://www.udk-berlin.de/person/anna-maria-roth/",
        },
        {
          text: "Marie Igelmann",
          link: "https://www.udk-berlin.de/person/marie-irene-igelmann/",
        },
      ],
    },
    {
      titles: ["Social Media"],
      texts: [
        {
          text: "Team Press / Communications",
          link: "https://www.udk-berlin.de/service/stabsstelle-presse-kommunikation/",
        },
        {
          text: "socialmedia@udk-berlin.de",
          link: "mailto:socialmedia@udk-berlin.de",
        },
      ],
    },
    {
      titles: ["Registration for UdK Berlin members"],
      texts: [
        {
          text: <i>The link will be published here in early July.</i>,
        },
        {
          text: "Questions about ticketing will be answered here",
        },
        {
          text: <i>The link will be published here in early July.</i>,
        },
      ],
    },
    {
      titles: ["Rundgang AG"],
    },
    {
      titles: ["Safe Space"],
      texts: [
        {
          text: "Karyna Yarmolynskak",
        },
        {
          text: "yarmolynska@udk-berlin.de",
          link: "mailto:yarmolynska@udk-berlin.de",
        },
      ],
    },
    {
      titles: ["Awareness"],
      texts: [
        {
          text: "Access Netzwerk ",
        },
      ],
    },
    {
      titles: ["Security"],
      texts: [
        {
          text: "Boretti Solutions GmbH",
        },
      ],
    },
    {
      titles: ["UdK:Shop"],
      texts: [
        {
          text: "Stabsstelle Strategisches Marketing",
          link: "https://www.udk-berlin.de/universitaet/stabsstelle-strategisches-marketing/daten-zur-udk-berlin/",
        },
      ],
    },
    { titles: [] },
    { titles: ["Contact persons of the faculties and centers"], texts: [] },
    {
      titles: ["College of Fine Arts"],
      texts: [
        {
          text: "Akiko Benhöft",
          link: "https://www.udk-berlin.de/person/akiko-bernhoeft/",
        },
        {
          text: "Kilian Seyfried",
          link: "https://www.udk-berlin.de/person/kilian-seyfried/",
        },
      ],
    },
    {
      titles: ["College of Architecture, Media and Design"],
      texts: [
        {
          text: "Juliane Aleithe",
          link: "https://www.udk-berlin.de/person/juliane-aleithe/",
        },
        {
          text: "Klaus Gasteier",
          link: "https://www.udk-berlin.de/person/klaus-gasteier/",
        },
        {
          text: "Brigitte Weingart",
          link: "https://www.udk-berlin.de/person/brigitte-weingart/",
        },
        {
          text: "Michael Häfner",
          link: "https://www.udk-berlin.de/person/michael-haefner/",
        },
        {
          text: "Matthias Noell",
          link: "https://www.udk-berlin.de/person/matthias-noell/",
        },
        {
          text: "Manja Ebert",
          link: "https://www.udk-berlin.de/person/manja-ebert/",
        },
        {
          text: "Ernst August Gräfe",
        },
      ],
    },
    {
      titles: ["College of Music"],
      texts: [
        {
          text: "Harry Curtis",
          link: "https://www.udk-berlin.de/person/harry-curtis/",
        },
        {
          text: "Sofie Hoyer",
        },
        {
          text: "Celine Kodim",
          link: "https://www.udk-berlin.de/person/celine-kodim/",
        },
      ],
    },
    {
      titles: ["College of Performing Arts"],
      texts: [
        {
          text: "Patrick Reu",
          link: "https://www.udk-berlin.de/person/patrick-reu/",
        },
      ],
    },
    {
      titles: ["Berlin Career College"],
      texts: [
        {
          text: "Kathrin Rusch",
          link: "https://www.udk-berlin.de/person/kathrin-rusch/",
        },
        {
          text: "Stefanie Schwarz",
          link: "https://www.udk-berlin.de/person/stephanie-schwarz/",
        },
      ],
    },
    {
      titles: [
        "Berlin Career College / Course of Sound Studies and Sonic Arts (M.A.)",
      ],
      texts: [
        {
          text: "Germaine Png",
        },
      ],
    },
    {
      titles: ["Berlin Career College / Artist Training"],
      texts: [
        {
          text: "Melanie Waldheim",
          link: "https://www.udk-berlin.de/person/melanie-waldheim/",
        },
      ],
    },
    {
      titles: ["Inter-University Centre for Dance Berlin"],
      texts: [
        {
          text: "Nik Haffner",
          link: "https://www.udk-berlin.de/person/nik-haffner/",
        },
        {
          text: "Sabine Trautwein",
          link: "https://www.udk-berlin.de/person/sabine-trautwein/",
        },
      ],
    },
    {
      titles: ["Jazz Institute Berlin"],
      texts: [
        {
          text: "Christoph Undisz",
        },
        {
          text: "Paulo Morello",
          link: "https://www.udk-berlin.de/person/paulo-morello/",
        },
        {
          text: "Céline Rudolph",
        },
        {
          text: "Gert Müller",
        },
      ],
    },
    {
      titles: ["Department of Building and Real Estate, Event Halls"],
      texts: [
        {
          text: "Robert Priebs",
        },
        {
          text: "Malwine Kurella",
        },
      ],
    },
  ],
};

export default function Contact() {
  const language = useIntl();

  let contacts = CONTACTS.de;
  if (language.locale === "en" && "en" in CONTACTS) contacts = CONTACTS.en;

  return (
    <Layout disableFilter={true}>
      <StaticLayout title={"contact"}>
        <div>
          {contacts.map((contact) => (
            <StaticLayoutParagraph content={contact} />
          ))}
        </div>
      </StaticLayout>
    </Layout>
  );
}
