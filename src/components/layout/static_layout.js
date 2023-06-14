import styled from "styled-components";

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
      return <FaqStaticTitle>{title}</FaqStaticTitle>;
    default:
      return <StaticTitle>{title}</StaticTitle>;
  }
};

export function StaticLayoutParagraph({ content }) {
  return (
    <p>
      {content.titles.map((title) => (
        <div>{title}</div>
      ))}
      {content.texts.map((texts) => (
        <div>{texts}</div>
      ))}
    </p>
  );
}
