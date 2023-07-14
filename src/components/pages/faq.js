import { useIntl } from "react-intl";

import StaticLayout from "@/components/layout/static_layout";
import Accordion from "@/components/accordion";

const FAQS = {
  de: [
    {
      title: "Anreise",
      texts: [
        "Der Rundgang 2023 findet an folgenden Standorten statt:",
        "</br>",
        "Bundesallee 1-12, 10719 Berlin",
        "Einsteinufer 43, 10587 Berlin",
        "Fasanenstraße 1 B, 10623 Berlin",
        "Grunewaldstraße 2-5, 10823 Berlin",
        "Hardenbergstraße 33, 10623 Berlin",
        "Jazz-Institut Berlin, Einsteinufer 43-53 10587 Berlin",
        "Konzertsaal Hardenbergstraße/Ecke Fasanenstraße, 10623 Berlin",
        "Lietzenburger Straße 45, 10777 Berlin",
        "Straße des 17. Juni 118, 10623 Berlin",
        "</br>",
        "Weitere Informationen zur Anfahrt der einzelnen Standorte befinden sich auf der <a href='https://www.udk-berlin.de/service/standorte-der-udk-berlin/'>Serviceseite der UdK Berlin</a>.",
      ]
    },
    {
      title: "Awareness",
      texts: [
        "Um den Rundgang 2023 für alle Personen sicher zu gestalten, wird in diesem Jahr ein Awarenessteam an allen Tagen am Standort Hardenbergstraße 33 und am Eröffnungstag am Standort Grunewaldstraße 2-5 eingesetzt. Du erkennst die Mitarbeitenden des Awarenessteams an ihren lila Westen mit der Aufschrift „Awareness“.",
        "</br>",
        "Solltest Du Dich unwohl fühlen oder unangebrachtes Verhalten beobachten, wende Dich bitte an das Awarenessteam (Die Telefonnummer wird am 21. Juli hier veröffentlicht) oder das Sicherheitspersonal. Dies gilt ausnahmslos für alle Standorte des Rundgangs.",
        "</br>",
        "Das Awarenessteam setzt sich aus Mitarbeitenden des <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/awareness/'>Access-Netzwerks</a> zusammen. Die Aufgaben des Awarenessteams umfassen beim Rundgang die Verbindung klassischer Sicherheitsaufgaben mit feministischer Haltung, diskriminierungssensibler Arbeitsweise, kommunikativen Lösungsstrategien, selbstkritischer Reflexion und Awarenessansatz. Auch an der Tür werden Awarenesspersonen eingesetzt, um in möglichen Konfliktsituationen vermitteln zu können."
      ]
    },
    {
      title: "Bändchen",
      texts: [
        "Angehörige der Universität der Künste Berlin können sich ab Montag, dem 17. Juli 2023, nach vorheriger Registrierung ein Bändchen am Ticketcounter im Konzertsaalfoyer abholen. Registrierung und Bändchen sind notwendig, um am Rundgang einen vorrangigen Einlass zu erhalten.",
        "Mehr zur Registrierung und zum Einlass findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/registrierung/'>hier</a>."
      ]
    },
    {
      title: "Barrierefreiheit",
      texts: [
        "Alle Informationen zu den Zugänglichkeiten der Standorte findest Du <a href='https://www.udk-berlin.de/fileadmin/2_dezentral/Referat_Studienangelegenheiten/Sonderinfos/12012022_Barrierefreie_Erschliessung_der_Gebaeude.pdf'>hier</a>.",
        "</br>",
        "Bei Fragen wende Dich gerne vor dem Rundgang an Christian Schmidts, den Beauftragten für Studierende mit Behinderungen und chronischen Krankheiten unter:",
        "+49 (0)30 3185 2225",
        "barrierefrei@udk-berlin.de",
        "</br>",
        "Während des Rundgangs 2023 stehen Dir das Awarenessteam und das Sicherheitspersonal zur Verfügung, solltest Du Unterstützung benötigen oder Fragen haben."
      ]
    },
    {
      title: "Bezahlung",
      texts: [
        "Der Eintritt ist an allen Standorten des Rundgangs frei.",
        "Shops, Cateringangebote und Bars werden individuell durch verschiedene Firmen und Bereiche der Universität betrieben. Barzahlung wird an allen Standorten möglich sein, die Zahlung mit Karte nur in Ausnahmefällen."
      ]
    },
    {
      title: "Brandschutz, Evakuierung, Fluchtwege",
      texts: [
        "Zur Sicherung der Veranstaltung sind Brandschutzhelfende, zu erkennen an roten Westen mit der Aufschrift „Brandschutz“, vor Ort. Die Flucht- und Rettungswege sind an allen Gebäuden eindeutig gekennzeichnet und an zentralen Punkten im Gebäude ausgehängt.",
        "</br>",
        "In allen Gebäuden gilt absolutes Rauchverbot."
      ]
    },
    {
      title: "Das ist anders",
      texts: [
        "Der Rundgang 2023 findet von Freitag, dem 21. Juli, bis zum Sonntag, dem 23. Juli, statt. In diesem Jahr entfällt das interne Sommerfest am Donnerstag. Der Rundgang 2023 ist an allen drei Tagen für Kunst- und Kulturinteressierte geöffnet. Da es in diesem Jahr keinen Preview-Tag für Fachpublikum gibt, ist auch der Freitag, wie auch die restlichen Rundgang-Tage, öffentlich.",
        "</br>",
        "Neu ist in diesem Jahr außerdem die Anwesenheit eines ausgebildeten Awarenessteams, der Wechsel der Sicherheitsfirma vor Ort und das Angebot eines Safer Space in der Hardenbergstraße 33."
      ]
    },
    {
      title: "Einlass",
      texts: [
        "Der Einlass ist frei. Es werden keine Tickets benötigt.",
        "Studierende, Lehrende und Mitarbeitende der UdK Berlin sowie Mitwirkende am Rundgang-Programm erhalten an allen Tagen vorrangigen Einlass. Für diesen ist eine Registrierung notwendig.",
        "</br>",
        "Wir bitten alle Studierenden, Lehrenden und Mitarbeitenden der UdK Berlin sowie alle Programm-Mitwirkenden um eine frühzeitige Registrierung, um einen reibungslosen Einlass zu gewährleisten. Achtung: Nur wer registriert ist und ein entsprechendes Bändchen vorweisen kann, erhält den vorrangigen Einlass!",
        "</br>",
        "Informationen zur Registrierung findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/registrierung/'>hier</a>. Der Mitarbeitenden- oder Studierendenausweis allein ermöglicht keinen vorrangigen Einlass zur Veranstaltung.",
        "</br>",
        "Damit unser Sicherheitskonzept eingehalten werden kann, wird es für die Standorte Hardenbergstraße 33 und Grunewaldstraße 2-5 eine Einlassbeschränkung geben. Diese wurde im Vorfeld aufgrund des Sicherheitskonzepts und der Brandschutzvorlage festgelegt. Wird der Einlass vorübergehend gestoppt, kann dies daran liegen, dass die Obergrenze der Personenzahl im Gebäude erreicht ist.",
        "Am Einlass achtet der Sicherheitsdienst außerdem darauf, dass keine gefährlichen Gegenstände oder Glasflaschen mit ins Gebäude gebracht werden.",
        "Die Öffnungszeiten des Rundgangs 2023 findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>hier</a>. Bitte beachte, dass diese sich während des Rundgangs von den regulären Öffnungszeiten der Standorte unterscheiden.",
      ]
    },
    {
      title: "Eröffnung",
      texts: [
        "Der Rundgang wird am 21. Juli um 17 Uhr offiziell durch den Präsidenten der UdK Berlin in der Grunewaldstraße 2-5 eröffnet. Die Veranstaltung ist öffentlich.",
        "</br>",
        "Die Informationen zu den Öffnungszeiten aller Standorte findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>hier</a>.",
      ]
    },
    {
      title: "Essen & Trinken",
      texts: [
        "Im Garten der Hardenbergstraße 33 bietet ein Cateringunternehmen Speisen und Getränke an. Auch vegane und vegetarische Speisen werden angeboten.",
        "An allen Standorten organisieren einzelne Klassen individuelle Bars.",
        "</br>",
        "Um den Rundgang so nachhaltig wie möglich zu gestalten, wird es ein Pfandsystem geben."
      ]
    },
    {
      title: "Lost & Found",
      texts: [
        "Fundsachen kannst Du an den Pforten der Gebäude abgeben bzw. abholen."
      ]
    },
    {
      title: "Öffnungszeiten",
      texts: [
        "Der Rundgang beginnt am Freitag, dem 21. Juli um 11 Uhr. Er endet am Sonntag, dem 23. Juli um 21 Uhr.",
        "</br>",
        "Die genauen Öffnungszeiten der einzelnen Standorte findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>hier</a>.",
        "<a href='https://rundgang.udk-berlin.de/'>Hier</a> findest Du die Programme der einzelnen Standorte.",
        "</br>",
        "Bitte beachte, dass die Öffnungszeiten während des Rundgangs von den regulären Öffnungszeiten der Standorte unterscheiden."
      ]
    },
    {
      title: "Presse und Kommunikation",
      texts: [
        "Presse- und Medienvertreter:innen können sich mit ihren Anfragen an die <a href='https://www.udk-berlin.de/service/stabsstelle-presse-kommunikation/'>Stabsstelle Presse/Kommunikation</a> wenden.",
        "</br>",
        "Die Stabsstelle verantwortet zudem die zentralen Social-Media-Kanäle der UdK Berlin auf <a href='https://www.instagram.com/udkberlin/'>Instagram</a>, <a href='https://twitter.com/UdK_Berlin_'>Twitter</a> und <a href='https://www.facebook.com/udkberlin'>Facebook</a>. Daneben bestehen viele weitere Social Media Auftritte von unterschiedlichen Studiengängen, Instituten und Arbeitsbereichen der UdK Berlin, die dazu beitragen, die Vielseitigkeit der Hochschule zum Rundgang sichtbar zu machen."
      ]
    },
    {
      title: "Programm",
      texts: [
        "Das digitale Programm gibt es <a href='https://rundgang.udk-berlin.de/'>hier</a>. Ausgedruckte Programmzettel liegen an den einzelnen Standorten aus.",
        "</br>",
        "Studierende und Lehrende der UdK Berlin stellen an den jeweiligen Standorten ihrer Fakultäten und Studiengänge ihre Arbeiten aus.",
        "</br>",
        "Alle Ansprechpartner*innen der Fakultäten zum Rundgang sind unter <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/kernteam-udk-berlin-rundgang-2023/'>Team und Kontakt</a> auf der Website der UdK Berlin sowie unter <a href='https://rundgang.udk-berlin.de/contact'>Kontakt</a> auf der Rundgang Plattform aufgeführt.",
        "</br>",
        "Bei der Fülle von Angeboten, kann leider nicht vermieden werden, dass es zu Überschneidungen im Programm kommt."
      ]
    },
    {
      title: "Registrierung",
      texts: [
        "Angehörige und Mitwirkende der UdK Berlin haben an allen drei Rundgangtagen vorrangigen Einlass. Zur Umsetzung des vorrangigen Einlasses ist eine Registrierung notwendig. Nur eine Registrierung und das Vorzeigen des Bändchens als Nachweis ermöglichen einen vorrangigen Einlass. Registrieren kann man sich seit dem 3. Juli. Alle Informationen zur Registrierung findest Du <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/registrierung/'>hier</a>."
      ]
    },
    {
      title: "Recycling",
      texts: [
        "Glasflaschen sind an den Tagen des Rundgangs in den Gebäuden nicht erlaubt. Die Bars arbeiten mit einem Pfandsystem. Wir bitten alle Personen, eigenständig darauf zu achten, ihren Müll fachgerecht zu entsorgen und auf Mülltrennung zu achten."
      ]
    },
    {
      title: "Reservierung",
      texts: [
        "Eine Reservierung von Plätzen für einzelne Veranstaltungen ist nicht möglich. Eine Ausnahme bildet die SCHAU23. Die <a href='https://www.udk-schau.de/'>Registrierung</a> erfolgt über die Fakultät Gestaltung."
      ]
    },
    {
      title: "Safer Space",
      texts: [
        "In der Hardenbergstraße 33, Raum 004, gibt es einen studentisch organisierten Safer Space.",
        "</br>",
        "Der Safer Space soll für alle einen geschützten Raum darstellen, der darauf abzielt, ein inklusives und respektvolles Umfeld für alle Teilnehmer*innen des Rundgangs zu schaffen und einen Rückzugsort zu bieten. Dieses Konzept soll sicherstellen, dass sich alle Menschen unabhängig von ihrer Herkunft, Identität, Geschlecht, Sexualität, Religion, körperlichen oder geistigen Fähigkeiten oder sonstigen Merkmalen wohl und akzeptiert fühlen."
      ]
    },
    {
      title: "Sicherheit",
      texts: [
        "Um die Veranstaltung für alle Personen sicher zu gestalten, werden ausgebildete Mitarbeitende für die Sicherheit, den Brandschutz und die Umsetzung des Awarenesskonzeptes vor Ort sein.",
        "</br>",
        "Der Einsatz von professionell ausgebildetem Sicherheitspersonal ist bei öffentlichen Veranstaltungen in der Größenordnung des Rundgangs gesetzlich verpflichtend. Die Aufgaben des Sicherheitsdienstes umfassen den Einlass an der Hardenbergstraße 33 und der Grunewaldstraße 2-5 sowie die Sicherung der Veranstaltung, das heißt ihrer Besucher*innen, ihrer Ausstattung und Infrastruktur. Das Sicherheitspersonal trägt grüne Westen mit der Aufschrift „Sicherheit“. Außerdem gibt es Mitarbeitende, die zur Sicherung des Brandschutzes vor Ort sind. Diese erkennst Du an den roten Westen mit der Aufschrift „Brandschutz“. Für Konfliktsituationen ist ein externes Awarenessteam vor Ort. Dieses erkennst Du an den lila Westen mit der Aufschrift „Awareness“. Das Awarenessteam ist auch beim Einlass am Standort Hardenbergstraße 33 anwesend.",
        "</br>",
        "Im Vorfeld des Rundgangs wurden die Mitarbeitenden umfassend geschult. Das Handout zum Briefing kann vorab (Der Link folgt hier in der Woche vor dem Rundgang) eingesehen werden.",
        "</br>",
        "Aufgabe des Sicherheitspersonals vor Ort ist auch die Unterbindung von Sachbeschädigungen, Vandalismus, Diebstahl sowie die Bewachung und Sicherung von Material und Infrastruktur. Sachbeschädigungen oder Diebstähle sollten dem Sicherheitspersonal oder der Veranstaltungsleitung (<a href='https://rundgang.udk-berlin.de/contact'>Kontakt</a>) gemeldet werden.",
        "</br>",
        "Mit der Sicherung der Veranstaltung ist in diesem Jahr die Firma Boretti Solutions beauftragt."
      ]
    },
    {
      title: "Überschneidung mit dem CSD Berlin",
      texts: [
        "Der Rundgang findet traditionell jedes Jahr am letzten Wochenende der Vorlesungszeit statt. Leider kann nicht vermieden werden, dass sich der Rundgang mit anderen Veranstaltungen wie dem CSD überschneidet.",
      ]
    },
    {
      title: "Weiteres",
      texts: [
        "Barbetreibende Klassen an der Hardenbergstraße 33 können in Absprache mit der Veranstaltungsleitung den Lieferanteneingang für die Getränkeanlieferung nutzen. Getränkelieferungen über den Haupteingang sind ausgeschlossen.",
        "</br>",
        "Über Anregungen, Tipps und Fragen für den Rundgang 2024 freuen wir uns unter rundgang@udk-berlin.de."
      ]
    },
  ],
  en: [
    {
      title: "Arrival",
      texts: [
        "The Rundgang 2023 will take place at the following locations:",
        "</br>",
        "Bundesallee 1-12, 10719 Berlin",
        "Einsteinufer 43, 10587 Berlin",
        "Fasanenstrasse 1 B, 10623 Berlin",
        "Grunewaldstrasse 2-5, 10823 Berlin",
        "Hardenbergstrasse 33, 10623 Berlin",
        "Jazz Institute Berlin, Einsteinufer 43-53 10587 Berlin",
        "Concert Hall Hardenbergstraße/corner Fasanenstraße, 10623 Berlin",
        "Lietzenburger Strasse 45, 10777 Berlin",
        "118 Strasse des 17. Juni, 10623 Berlin",
        "</br>",
        "Further information on how to get to the individual locations can be found on the <a href='https://www.udk-berlin.de/service/standorte-der-udk-berlin/'>UdK Berlin's service page.</a>",
      ]
    },
    {
      title: "Awareness",
      texts: [
        "In order to make the 2023 Rundgang safe for everyone, this year an awareness team will be deployed on all days at the Hardenbergstraße 33 and on the opening day at the Grunewaldstraße 2-5. You will recognize the awareness team members by their purple vests with \"Awareness\" written on them.",
        "If you feel uncomfortable or observe inappropriate behavior, please contact the awareness team (the phone number will be published here on July 21) or the security staff. This applies to all locations on the Rundgang without exception.",
        "The awareness team is made up of <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/awareness/'>Access Network</a> staff. The tasks of the awareness team during the Rundgang include the combination of classic security tasks with feminist attitudes,  working methods sensitive to discrimination, communicative solution strategies, self-critical reflection and an awareness approach. Awareness persons are also deployed at the door to mediate in possible conflict situations."
]
    },
    {
      title: "Accessibility",
      texts: [
        "You can find all information about the accessibility of the locations <a href='https://www.udk-berlin.de/fileadmin/2_dezentral/Referat_Studienangelegenheiten/Sonderinfos/12012022_Barrierefreie_Erschliessung_der_Gebaeude.pdf'>here</a>.",
        "If you have any questions before the event, please contact Christian Schmidts, the representative for students with disabilities and chronic illnesses, at:",
        "+49 (0)30 3185 2225",
        "barrierefrei@udk-berlin.de",
        "During the 2023 Rundgang, the awareness team and security staff will be available to assist you if you need support or have any questions."
      ]
    },
    {
      title: "Entrance",
      texts: [
        "Entrance is free of charge. No tickets are required.",
        "Students, teachers and staff of the UdK Berlin as well as participants in the Rundgang program will have priority admission on all days. Registration is required for this.",
        "</br>",
        "We kindly ask all students, teachers and staff of the UdK Berlin as well as all program participants to register early in order to guarantee a smooth admission. Attention: Only those who are registered and can show an appropriate wristband will be given priority admission!",
        "Information about registration can be found here. The employee or student ID card alone does not allow priority admission to the event.",
        "In order to comply with our security concept, there will be an admission restriction for the locations Hardenbergstraße 33 and Grunewaldstraße 2-5. This was determined in advance based on the security concept and the fire protection concept. If admission is temporarily stopped, this may be because the upper limit for the number of people in the building has been reached.",
        "At the entrance, the security service also makes sure that no dangerous objects or glass bottles are brought into the building.",
        "You can find the opening hours of the Rundgang 2023 <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>here</a>. Please note that these will differ from the regular opening hours of the locations during the Rundgang.",
      ]
    },
    {
      title: "Fire protection, evacuation, escape routes",
      texts: [
        "Fire protection assistants, recognizable by red vests with the inscription \"Brandschutz\" (fire protection), are on site to ensure the safety of the event. The escape and rescue routes are clearly marked on all buildings and posted at central points in the building.",
        "Smoking is absolutely prohibited in all buildings."
      ]
    },
    {
      title: "Food & Drinks",
      texts: [
        "In the garden of Hardenbergstraße 33, a catering company offers food and drinks. Vegan and vegetarian meals are also offered.",
        "At all locations, individual classes are organizing individual bars.",
        "To make the Rundgang as sustainable as possible, there will be a deposit system.",
      ]
    },
    {
      title: "Further",
      texts: [
        "Bar-operating classes at Hardenbergstraße 33 may use the vendor entrance for individual beverage deliveries in consultation with the event management. Beverage deliveries via the main entrance are excluded.",
        "We welcome suggestions, tips and questions for the 2024 Rundgang at rundgang@udk-berlin.de."
      ]
    },
    {
      title: "Opening",
      texts: [
        "The Rundgang will be officially opened by the President of the UdK Berlin at Grunewaldstraße 2-5 on July 21 at 5 pm. The event is open to the public.",
        "Information about the opening hours of all locations can be found <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>here</a>."
      ]
    },
    {
      title: "Payment",
      texts: [
        "Admission is free at all locations on the Rundgang.",
        "Stores, catering services and bars will be operated individually by various companies and areas of the university. Cash payment will be possible at all locations, payment by card only in some cases.",
      ]
    },
    {
      title: "Lost & Found",
      texts: [
        "You can drop off or pick up lost and found items at the gates rooms of the buildings."
      ]
    },
    {
      title: "Opening hours",
      texts: [
        "The Rundgang begins on Friday, July 21 at 11 am. It ends on Sunday, July 23 at 9 pm.",
        "You can find the exact opening hours of the individual locations <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/gebaeudeoeffnungszeiten/'>here</a>.",
        "<a href='https://rundgang.udk-berlin.de/'>Here</a> you can find the programs of the individual locations.",
        "</br>",
        "Please note that the opening hours during the Rundgang differ from the regular opening hours of the locations.",
      ]
    },
    {
      title: "Overlap with the CSD Berlin",
      texts: [
        "The Rundgang traditionally takes place every year on the last weekend of the lecture period. Unfortunately, it cannot be avoided that the Rundgang overlaps with other events like the CSD. "
      ]
    },
    {
      title: "Press and Communication",
      texts: [
        "Press and media representatives can contact the <a href='https://rundgang.udk-berlin.de/'>Press/Communications Team</a> with their inquiries.",
        "The department is also responsible for the UdK Berlin's central social media channels on <a href='https://www.instagram.com/udkberlin/'>Instagram</a>, <a href='https://twitter.com/UdK_Berlin_'>Twitter</a> and <a href='https://www.facebook.com/udkberlin'>Facebook</a>. In addition, there are many other social media presences of different study programs, institutes and work areas of the UdK Berlin, which contribute to making the versatility of the university visible for the Rundgang.",
      ]
    },
    {
      title: "Program",
      texts: [
        "The digital program is available <a href='https://rundgang.udk-berlin.de/'>here</a>. Printed program sheets are available at the individual locations.",
        "Students and teachers of the UdK Berlin will exhibit their work at the respective locations of their faculties and study programs.",
        "All faculty contact persons for the Rundgang are listed under <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/kernteam-udk-berlin-rundgang-2023/'>Team and Contact</a> on the UdK Berlin website and under <a href='https://rundgang.udk-berlin.de/contact'>Contact</a> on the Rundgang platform.",
        "Due to the abundance of offerings, it is unfortunately impossible to avoid overlaps in the program.",
      ]
    },
    {
      title: "Recycling",
      texts: [
        "Glass bottles are not allowed in the buildings on all days of the Rundgang. The bars operate a deposit system. We ask all persons to independently take care to dispose of their garbage properly and to pay attention to waste separation."
      ]
    },
    {
      title: "Registration",
      texts: [
        "Members of the UdK Berlin and contributors to the program have priority admission on all three days of the Rundgang. Registration is necessary for the implementation of priority admission. Only registration and the presentation of a wristband as proof will allow priority admission. You can register since July 3. All information about registration can be found <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/registrierung/'>here</a>"
      ]
    },
    {
      title: "Reservation",
      texts: [
        "It is not possible to reserve seats for individual events. An exception to this is , where <a href='https://www.udk-schau.de/'>registration</a> is handled by the Faculty of Design."
      ]
    },
    {
      title: "Safer Space",
      texts: [
        "There is a student-organized Safer Space at Hardenbergstraße 33, room 004.",
        "The Safer Space is intended to be a protected space for everyone, aiming to create an inclusive and respectful environment for all Rundgang participants and to provide a place of retreat. This concept is intended to ensure that all people feel comfortable and accepted regardless of their background, identity, gender, sexuality, religion, physical or mental ability, or other characteristics."
      ]
    },
    {
      title: "Safety",
      texts: [
        "In order to make the event safe for everyone, trained staff will be on site for security, fire safety and the implementation of the awareness concept.",
        "The use of professionally trained security personnel is mandatory by law for public events of the size of the Rundgang. The tasks of the security service include admission at Hardenbergstrasse 33 and Grunewaldstrasse 2-5 as well as securing the event, i.e. its visitors, equipment and infrastructure. The security personnel wear green vests with the inscription \"Security\". There are also employees who are on site to ensure fire protection. You can recognize them by their red vests with the inscription \"Brandschutz\". An external awareness team is on site for conflict situations. You can recognize this team by the purple vests with the inscription \"Awareness\". The awareness team is also present at the entrance to the Hardenbergstraße 33 site.",
        "The employees have received extensive training prior to the Rundgang. The handout on the briefing can be viewed in advance (the link will follow here in the week before the Rundgang).",
        "The task of the security personnel on site is also to prevent damage to property, vandalism, theft and to guard and secure material and infrastructure. Damage to property or theft should be reported to the security personnel or the event management (<a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/kernteam-udk-berlin-rundgang-2023/'>contact</a>).",
        "This year, the company <a href='https://boretti-solutions.de/'>Boretti</a> Solutions has been commissioned to provide security for the event.",
      ]
    },
    {
      title: "This is different",
      texts: [
        "The Rundgang 2023 will take place from Friday, July 21, through Sunday, July 23. This year, the internal summer party on Thursday will not take place. Rundgang 2023 will be open to art and culture enthusiasts on all three days. Since there is no preview day for professional audiences this year, Friday will also be open to the public, as on the rest of the Rundgang days.",
        "Also new this year is the presence of a trained awareness team, the change of security company on site and the offer of a Safer Space at Hardenbergstraße 33."
      ]
    },
    {
      title: "Wristband",
      texts: [
        "Members of the Berlin University of the Arts may pick up a wristband at the ticket counter in the Concert Hall foyer beginning Monday, July 17, 2023, after registering in advance. Registration and wristbands are required to receive priority admission on the Rundgang.",
        "More information about registration and admission can be found <a href='https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/2023/registrierung/'>here</a>."
      ]
    },
  ]
};

export default function Faq() {
  const language = useIntl();

  let items = FAQS.de;
  if (language.locale === "en" && "en" in FAQS) items = FAQS.en;

  return (
    <StaticLayout layout={"faq"} title={"faq"}>
      <Accordion items={items} />
    </StaticLayout>
  );
}
