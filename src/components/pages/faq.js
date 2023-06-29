import { useIntl } from "react-intl";

import Layout from "@/components/layout/layout";
import StaticLayout from '@/components/layout/static_layout'
import Accordion from '@/components/accordion'

const FAQS = {
    de: [
        {
            title: 'Exercitation',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.'
        },
        {
            title: 'Tempor est nulla magna ad quis non.',
            content: 'Eiusmod in sint cillum consequat Lorem. Est cillum cillum anim nulla Lorem minim quis deserunt nisi ex. Mollit officia minim commodo irure sint laborum laboris. Ut in quis veniam do Lorem esse. Excepteur duis anim magna eiusmod ullamco ut ullamco non velit. Cillum mollit aliqua enim esse anim deserunt.'
        }
    ]
}

export default function Faq () {
    const language = useIntl();

    let faqs = FAQS.de
    if (language.locale === 'en' && 'en' in FAQS)
        faqs = FAQS.en;

    return (
      <Layout disableFilter={true}>
          <StaticLayout layout={'faq'} title={'faq'}>
              <Accordion items={faqs} />
          </StaticLayout>
      </Layout>
    )
}
