import { useIntl } from "react-intl";

import Layout from "@/components/layout/layout";
import StaticLayout from "@/components/layout/static_layout";
import Accordion from "@/components/accordion";

const FAQS = {
  de: [
    {
      title: "Exercitation",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.",
    },
    {
      title: "Tempor est nulla magna ad quis non.",
      content:
        "Eiusmod in sint cillum consequat Lorem. Est cillum cillum anim nulla Lorem minim quis deserunt nisi ex. Mollit officia minim commodo irure sint laborum laboris. Ut in quis veniam do Lorem esse. Excepteur duis anim magna eiusmod ullamco ut ullamco non velit. Cillum mollit aliqua enim esse anim deserunt.",
    },
  ],
};

const faqDisclaimer = {
  de: <i>Die FAQs werden ab dem 10. Juli hier veröffentlicht.</i>,
  en: <i>The FAQs will be published here on the 10th of July.</i>,
};

export default function Faq() {
  const language = useIntl();

  //   let faqs = FAQS.de;
  //   if (language.locale === "en" && "en" in FAQS) faqs = FAQS.en;
  let disclaimer = faqDisclaimer.de;
  if (language.locale === "en" && "en" in faqDisclaimer)
    disclaimer = faqDisclaimer.en;

  return (
    <>
      {/* <StaticLayout layout={"faq"} title={"faq"}> */}
      <StaticLayout title={"faq"}>
        {/* <Accordion items={faqs} /> */}
        {disclaimer}
      </StaticLayout>
    </>
  );
}
