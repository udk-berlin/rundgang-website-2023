import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import LoadingLayout from "@/components/layout/loading";
import {
  staticBreakpoints,
  staticLTheme,
  staticMTheme,
} from "@/themes/pages/static";
import { useWindowSize } from "@/providers/window_size";

export default function Accordion({ items }) {
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
            <AccordionWrapper>
              {items.map((item) => (
                <AccordionItem item={item} />
              ))}
            </AccordionWrapper>
          </ThemeProvider> : <LoadingLayout />
      }
    </>
  );
}

function AccordionItem({ item }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItemWrapper>
      <AccordionItemTitle onClick={() => setIsActive(!isActive)}>
        {item.title}
      </AccordionItemTitle>
      {isActive && (
        <AccordionItemContentWrapper>
          <AccordionItemContentLine />
          <AccordionItemTextsContainer>
            {item.texts.map(text => <AccordionItemText dangerouslySetInnerHTML={{__html: text}} />)}
          </AccordionItemTextsContainer>
        </AccordionItemContentWrapper>
      )}
    </AccordionItemWrapper>
  );
}

const AccordionWrapper = styled.div`
  border: var(--border-width) solid var(--border-color);

  & > div {
    border-bottom: var(--border-width) solid var(--border-color);
  }

  & > div:nth-last-child(1) {
    border: none;
  }
`;

const AccordionItemWrapper = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.accordion.itemWrapper.flexDirection};
  padding: 0.5rem;
  transition: height 2s ease-in-out;
`;

const AccordionItemTitle = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  vertical-align: middle;
  font-weight: 500;
`;

const AccordionItemContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
    theme.accordion.itemContentWrapper.gridTemplateColumns};
`;

const AccordionItemTextsContainer = styled.div``;

const AccordionItemContentLine = styled.div`
  width: 65px;
  border-bottom: 2px solid #000;
  margin: ${({ theme }) => theme.accordion.itemContentLine.margin};
  align-self: start;
`;

const AccordionItemText = styled.div`
  a {
    text-decoration: underline;
  }
`;
