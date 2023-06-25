import styled from "styled-components";

import { BOX_HEIGHT, NUMBER_OF_HOURS, range, WIDTH_PER_HOUR, TIMELINE_WIDTH } from '@/components/pages/timeline/constants'
import React from 'react'

export default function TimelineHours() {
  return (
    <HoursContainer>
      {range(0, NUMBER_OF_HOURS).map(hour => {
        let content;

        if (hour > 1 && hour < NUMBER_OF_HOURS - 1) {
          content = (
            <>
              <HourLine transparent={hour === 2}/>
              <Hour>{(hour + 15) % 24}:00</Hour>
              <HourLine transparent={hour === NUMBER_OF_HOURS - 2}/>
            </>
          )
        }

        return (<HourContainer>
          {content}
        </HourContainer>)
      })}
    </HoursContainer>
  );
}

const HoursContainer = styled.div`
  position: relative;
  z-index: 3;
  left: -${WIDTH_PER_HOUR / 2}px;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${BOX_HEIGHT + 2}px;
  min-height: ${BOX_HEIGHT + 2}px;
  max-height: ${BOX_HEIGHT + 2}px;
  width: ${TIMELINE_WIDTH}px;

  padding: var(--info-grid-padding);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  background-color: var(--color-white);

  border-bottom: 2px solid black;
  
  margin-bottom: 40px;
`;

const HourContainer = styled.div`
  display: flex;
  
  width: ${WIDTH_PER_HOUR}px;
  min-width: ${WIDTH_PER_HOUR}px;
  max-width: ${WIDTH_PER_HOUR}px;
  
  color: black;
`

const Hour = styled.div`
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  
  color: var(--color-black);
  font-weight: var(--calender-box-font-weight);
  font-size: var(--calender-box-font-size);
`

const HourLine = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  border-bottom: ${({ transparent }) => transparent ? 0 : '2px solid var(--color-pink)'};
`
