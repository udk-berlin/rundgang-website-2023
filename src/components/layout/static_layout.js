import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled, { ThemeProvider } from "styled-components";

import LoadingLayout from "@/components/layout/loading";

import { useWindowSize } from "@/providers/window_size";

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
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= staticBreakpoints.m) {
      setResponsiveTheme(staticMTheme);
    } else if (windowSize?.width > staticBreakpoints.m) {
      setResponsiveTheme(staticLTheme);
    }
  }, [windowSize?.width]);

  return (
    <>
      {
        responsiveTheme ?
        <ThemeProvider theme={responsiveTheme}>
          <Container>
            {staticTitle(layout, title)}
            <div></div>
            {children}
          </Container>
        </ThemeProvider> : <LoadingLayout />
      }
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.container.gridTemplateColumns};
  
  min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};

  padding: ${({ theme }) => theme.container.padding};
`;
const StaticTitle = styled.div`
  position: ${({ theme }) => theme.staticTitle.position};
  
  padding-bottom: 1rem;
  
  font-weight: 600;
  font-size: ${({ theme }) => theme.staticTitle.fontSize};
`;

const FaqStaticTitle = styled(StaticTitle)`
  position: ${({ theme }) => theme.staticTitle.position};

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
