import { Accordion, AccordionItem } from "@/components/accordion";
import Layout from "@/components/layout/layout";
import StaticLayout from "@/components/layout/static_layout";
import styled from "styled-components";

const FaqData = [
  {
    title: "Exercitation",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: "Tempor est nulla magna ad quis non.",
    content:
      "Eiusmod in sint cillum consequat Lorem. Est cillum cillum anim nulla Lorem minim quis deserunt nisi ex. Mollit officia minim commodo irure sint laborum laboris. Ut in quis veniam do Lorem esse. Excepteur duis anim magna eiusmod ullamco ut ullamco non velit. Cillum mollit aliqua enim esse anim deserunt.",
  },
];

export const StaticTitle = styled.div`
  font-weight: 600;
`;

const FaqStaticTitle = styled(StaticTitle)`
  padding: 0.5rem 0;
`;

export default function Faq() {
  return (
    <Layout>
      <StaticLayout>
        <FaqStaticTitle>FAQ</FaqStaticTitle>
        <Accordion>
          {FaqData.map((data) => {
            return <AccordionItem title={data.title} content={data.content} />;
          })}
        </Accordion>
      </StaticLayout>
    </Layout>
  );
}
