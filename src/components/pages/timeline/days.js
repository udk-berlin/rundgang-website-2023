import React, { useState } from 'react'
import styled from "styled-components";

import { WIDTH_PER_HOUR, TIMELINE_WIDTH } from '@/components/pages/timeline/constants'

const days = [
  {name: 'Freitag 21.07.', hours: 9},
  {name: 'Samstag 22.07.', hours: 24},
  {name: 'Sonntag 23.07.', hours: 24},
]

export default function TimelineDays() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <DaysContainer>
      {
        days.map((day, index) => {
          return (<Day width={WIDTH_PER_HOUR * day.hours} selected={index === selectedDayIndex} onClick={() => setSelectedDayIndex(index)}>{day.name}</Day>)
        })
      }
    </DaysContainer>
  );
}

const DaysContainer = styled.div`
  position: relative;
  z-index: 3;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: ${TIMELINE_WIDTH}px;
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  background-color: var(--color-white);
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  height: 100%;
  
  background: ${({ selected }) => selected ? 'var(--color-pink)' : 'var(--color-white)' };

  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ selected }) => selected ? 'var(--color-white)' : 'var(--color-black)' };

  padding: 1rem;

  border-bottom: 2px solid black;
  border-right: 2px solid black;
  
  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`
