import { useIntl } from "react-intl";
import styled from "styled-components";

import {
  NUMBER_OF_HOURS,
  range,
  FIRST_DAY_START_HOUR, HOURS_PER_DAY, HOURS_PER_HALF_DAY
} from '@/components/pages/timeline/constants'
import React from 'react'

const NUMBER_OF_HALF_DAYS = Math.round(NUMBER_OF_HOURS / 12);

export default function TimelineMobileHours() {
  const language = useIntl();

  return (
    <HoursContainer>
      <HoursInnerContainer>
        {range(0, NUMBER_OF_HALF_DAYS).map(halfDay => {
          let content;


          let hour = ((halfDay * 12) + 10) % 24

          content = (
            <>
              <HourLine transparent={halfDay === 0}/>
              <Hour>{hour}{language.locale === 'en' ? hour % HOURS_PER_DAY < 12 ? 'am' : 'pm' : ':00'}</Hour>
              <HourLine transparent={halfDay === NUMBER_OF_HALF_DAYS - 1}/>
            </>
          )


          return (<HourContainer>
            {content}
          </HourContainer>)
        })}
      </HoursInnerContainer>
    </HoursContainer>
  );
}

const HoursContainer = styled.div`
  display: flex;

  height: var(--calender-hours-height);
  min-height: var(--calender-hours-height);
  max-height: var(--calender-hours-height);
  width: var(--timeline-width);

  background-color: var(--color-white);
  border-bottom: 2px solid black;
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  cursor: default;
`;

const HoursInnerContainer = styled.div`
  position: relative;
  left: calc(var(--timeline-width-per-hour) * 4 * -1);

  display: flex;
`;

const HourContainer = styled.div`
  display: flex;
  
  width: calc(var(--timeline-width-per-hour) * 12);
  min-width: calc(var(--timeline-width-per-hour) * 12);
  max-width: calc(var(--timeline-width-per-hour) * 12);
  height: 100%;
  
  color: black;
`

const Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  
  color: var(--color-black);
  font-weight: var(--calender-box-font-weight);
  font-size: var(--calender-box-font-size);
`

const HourLine = styled.div`
  flex-grow: 1;
  margin-bottom: calc(calc(var(--calender-hours-height) - 4px) / 2);
  border-bottom: ${({ transparent }) => transparent ? 0 : '2px solid var(--color-pink)'};
`
