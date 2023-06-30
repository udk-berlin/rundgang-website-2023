import React from 'react'
import styled from "styled-components";
import { useIntl } from "react-intl";

import { useSlider, useSliderDispatch } from "@/providers/slider";

import {
  WIDTH_PER_HOUR,
  TIMELINE_WIDTH,
  DAYS,
} from '@/components/pages/timeline/constants'

export default function TimelineDays() {
  const language = useIntl();
  const slider = useSlider();
  const dispatch = useSliderDispatch()
  const days = language.locale === 'en' ? DAYS.en : DAYS.de

  const getClickHandler = (index) => {
   return () => {
      dispatch({
        type: 'update',
        position: index,
        origin: 'click'
      })
    }
  }

  return (
    <DaysInnerContainer>
      {
        days.map((day, index) => {
          return (
            <Day
              width={WIDTH_PER_HOUR * day.hours}
              selected={index === slider.position}
              onClick={getClickHandler(index)}>
              {day.name}
            </Day>)
        })
      }
    </DaysInnerContainer>
  );
}

const DaysInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: var(--calender-days-height);
  min-height: var(--calender-days-height);
  max-height: var(--calender-days-height);
  width: ${TIMELINE_WIDTH}px;
  min-width: ${TIMELINE_WIDTH}px;
  max-width: ${TIMELINE_WIDTH}px;
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  background-color: var(--color-white);
  
  cursor: pointer;
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

  border-bottom: 2px solid black;
  border-right: 2px solid black;
  
  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`
