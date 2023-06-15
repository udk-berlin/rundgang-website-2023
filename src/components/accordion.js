import React, { useState } from 'react'
import styled from 'styled-components'

export default function Accordion ({ items }) {
  return (
        <AccordionWrapper>
            {items.map(item => <AccordionItem item={item}/>)}
        </AccordionWrapper>
  )
}

function AccordionItem ({ item }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <AccordionItemWrapper>
      <AccordionItemTitle onClick={() => setIsActive(!isActive)}>{item.title}</AccordionItemTitle>
      {isActive && (
        <AccordionItemContentWrapper>
          <AccordionItemContentLine />
          <AccordionItemContent>{item.content}</AccordionItemContent>
        </AccordionItemContentWrapper>
      )}
    </AccordionItemWrapper>
  )
}

const AccordionWrapper = styled.div`
  border: var(--border-width) solid var(--border-color);

  & > div {
    border-bottom: var(--border-width) solid var(--border-color);
  }

  & > div:nth-last-child(1) {
    border: none;
  }
`

const AccordionItemWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  transition: height 2s ease-in-out;
`

const AccordionItemTitle = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  vertical-align: middle;
  font-weight: 500;
`

const AccordionItemContentWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`

const AccordionItemContentLine = styled.div`
  width: 65px;
  border-bottom: 2px solid #000;
  margin: 0.7rem 0.5rem;
  align-self: start;
`

const AccordionItemContent = styled.div``
