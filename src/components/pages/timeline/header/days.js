import React from 'react'
import styled from "styled-components";
import { useIntl } from "react-intl";

import { useSlider, useSliderDispatch } from "@/providers/slider";

import { DAYS } from '@/components/pages/timeline/constants'



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
              hours={day.hours}
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
  width: var(--timeline-width);
  min-width: var(--timeline-width);
  max-width: var(--timeline-width);
  
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
  
  width: calc(var(--timeline-width-per-hour) * ${({ hours }) => hours});
  min-width: calc(var(--timeline-width-per-hour) * ${({ hours }) => hours});
  max-width: calc(var(--timeline-width-per-hour) * ${({ hours }) => hours});
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
