import styled from "styled-components";
import { FormattedMessage } from "react-intl";

export default function StaticLayout({
  layout = "default",
  title = "",
  children,
}) {
  return (
    <Container>
      {staticTitle(layout, title)}
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  padding: 2rem;
`;
const StaticTitle = styled.div`
  font-weight: 600;
`;

const FaqStaticTitle = styled(StaticTitle)`
  padding: 0.5rem 0;
`;

const staticTitle = (layout, title) => {
  switch (layout) {
    case "faq":
      return (
        <FaqStaticTitle>
          <FormattedMessage id={title} />
        </FaqStaticTitle>
      );
    default:
      return (
        <StaticTitle>
          <FormattedMessage id={title} />
        </StaticTitle>
      );
  }
};

export function StaticLayoutParagraph({ content }) {
  return (
    <p>
      {content.titles.map((title) => (
        <StaticParagraphTitle>{title}</StaticParagraphTitle>
      ))}
      {/* {console.log(content.texts)} */}
      {content.texts?.map((text) => (
        <div>
          {text.link ? (
            <a href={text.link}>{text.text}</a>
          ) : (
            <div>{text.text}</div>
          )}
        </div>
      ))}
    </p>
  );
}

const StaticParagraphTitle = styled.div`
  font-weight: 500;
`;
