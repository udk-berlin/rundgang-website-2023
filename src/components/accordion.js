import React, { useState } from "react";
import styled from "styled-components";
import { Keyframes } from "styled-components";

export const Accordion = styled.div`
  border: var(--border-width) solid var(--border-color);

  & > div {
    border-bottom: var(--border-width) solid var(--border-color);
  }

  & > div:nth-last-child(1) {
    border: none;
  }
`;

export function AccordionItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionWrapper>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        {title}
        {/* <div>{isActive ? "-" : "+"}</div> */}
      </AccordionTitle>
      {isActive && (
        <AccordionContentWrapper>
          <AccordionLine />
          <AccordionContent>{content}</AccordionContent>
        </AccordionContentWrapper>
      )}
    </AccordionWrapper>
  );
}

export const AccordionWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  transition: height 2s ease-in-out;
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  vertical-align: middle;
  font-weight: 500;
`;

const AccordionContentWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`;

const AccordionLine = styled.div`
  width: 65px;
  border-bottom: 2px solid #000;
  margin: 0.7rem 0.5rem;
  align-self: start;
`;

const AccordionContent = styled.div``;
