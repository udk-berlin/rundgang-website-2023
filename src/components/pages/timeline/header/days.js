import React from 'react'
import styled from "styled-components";
import { useIntl } from "react-intl";

import { useSlider, useSliderDispatch } from "@/providers/slider";
import { DAYS } from "@/themes/pages/timeline";


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

  height: ${({ theme }) => theme.days.height};
  min-height: ${({ theme }) => theme.days.height};
  max-height: ${({ theme }) => theme.days.height};
  
  width: ${({ theme }) => theme.width};
  min-width: ${({ theme }) => theme.width};
  max-width: ${({ theme }) => theme.width};
  
  cursor: pointer;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  
  width: calc(${({ hours }) => hours} * ${({ theme }) => theme.widthPerHour});
  min-width: calc(${({ hours }) => hours} * ${({ theme }) => theme.widthPerHour});
  max-width: calc(${({ hours }) => hours} * ${({ theme }) => theme.widthPerHour});
  height: 100%;
  
  background: ${({ selected, theme }) => selected ? theme.colors.pink : theme.colors.white };
  
  font-size: ${({ theme }) => theme.days.fontSize};
  font-weight: ${({ theme }) => theme.days.fontWeight};
  color: ${({ selected, theme }) => selected ? theme.colors.white : theme.colors.black };
  
  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  
  :hover {
    background: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.white};
  }

  :last-child {
    border-right: 0;
  }
`
