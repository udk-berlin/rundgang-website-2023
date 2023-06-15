import {useIntl} from "react-intl";

import StaticLayout, {
    StaticLayoutParagraph
} from '@/components/layout/static_layout'
import Layout from "@/components/layout/layout";

const IMPRINT = {
    de: [
        {
            titles: [],
            texts: [
                'Universität der Künste Berlin',
                'Körperschaft des öffentlichen Rechts',
                'gesetzlich vertreten durch den Präsidenten Prof. Dr.Norbert Palz',
                ' Einsteinufer 43',
                'D-10587 Berlin',
                'Telefon: 030/3185-0'
            ]
        },
        {
            titles: [],
            texts: [
                'Umsatzsteuer-Identifikationsnummer: DE811403316',
                'Rechtsaufsicht: Senatsverwaltung für Wissenschaft, Gesundheit, Pflege und Gleichstellung'
            ]
        },
        {
            titles: [],
            texts: [
                'Entwicklung: Medienhaus-Team ([Vorname Nachname, Mailadresse])',
                'Gestaltung: [Vorname Nachname 1], [Vorname Nachname 2], [Vorname Nachname 3]',
                'Redaktion: Stabsstelle Überfakultäre Veranstaltungen[Vorname Nachname, Mailadresse]'
            ]
        },
        {
            titles: [],
            texts: [
                'Die redaktionelle Verantwortung der Programmunterseiten liegt bei den Mitwirkenden selbst. Die zuständigen Ansprechpartner*innen sind auf den Programmunterseiten genannt. Programminhalte werden laufend durch ihre Redakteur*innen aktualisiert.'
            ]
        },
        {
            titles: ['Hinweis'],
            texts: [
                'Die Universität der Künste (UdK) Berlin übernimmt keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der auf dieser Website bereitgestellten Angaben. Dies gilt im besonderen Maße für die Inhalte externer Internetseiten, auf die über Hyperlinks direkt oder indirekt verwiesen wird und die von der UdK Berlin nicht beeinflusst werden können. Die von den Rundgang-Mitwirkenden unterbreiteten Angebote unterliegen der Verantwortung der jeweiligen Bereiche und Mitwirkenden.'
            ]
        },
        {
            titles: [],
            texts: [
                'Der Inhalt dieser Website ist urheberrechtlich geschützt. Die Vervielfältigung oder Verbreitung der auf dieser Seite bereit gestellten Informationen bedarf der vorherigen schriftlichen Genehmigung durch die UdK Berlin.'
            ]
        }
    ]
}

export default function Imprint () {
    const language = useIntl();

    let imprint = IMPRINT.de
    if (language.locale === 'en' && 'en' in IMPRINT)
        imprint = IMPRINT.en;

    return (
      <Layout>
          <StaticLayout title={'imprint'}>
              <div>
                  {imprint.map((imprint) => (
                    <StaticLayoutParagraph content={imprint} />
                  ))}
              </div>
          </StaticLayout>
      </Layout>
    )
}
