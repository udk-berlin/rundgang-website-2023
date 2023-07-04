import styled, { ThemeProvider } from "styled-components";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/window_size";
import {
  staticBreakpoints,
  staticLTheme,
  staticMTheme,
} from "@/themes/pages/static";

export default function StaticLayout({
  layout = "default",
  title = "",
  children,
}) {
  const [responsiveTheme, setResponsiveTheme] = useState(staticLTheme);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= staticBreakpoints.m) {
      setResponsiveTheme(staticMTheme);
    } else {
      setResponsiveTheme(staticLTheme);
    }
  }, [windowSize.width]);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <Container>
        {staticTitle(layout, title)}
        {children}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.container.gridTemplateColumns};
  padding: 2rem;
`;
const StaticTitle = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.staticTitle.fontSize};
  padding-bottom: 1rem;
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
