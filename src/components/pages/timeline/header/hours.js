import { useIntl } from "react-intl";
import styled from "styled-components";

import {
  NUMBER_OF_HOURS,
  range,
  FIRST_DAY_START_HOUR, HOURS_PER_DAY, HOURS_PER_HALF_DAY
} from '@/components/pages/timeline/constants'
import React from 'react'

export default function TimelineHours() {
  const language = useIntl();
  const isMobile = true;

  return (
    <HoursContainer>
      <HoursInnerContainer>
        {range(0, NUMBER_OF_HOURS).map(hour => {
          let content;

          if (hour > 1 && hour < NUMBER_OF_HOURS - 1) {
            let hourString = (hour + FIRST_DAY_START_HOUR) % (language.locale === 'en' ? HOURS_PER_HALF_DAY : HOURS_PER_DAY)
            if (hourString === 0 && language.locale === 'en' && (hour + FIRST_DAY_START_HOUR) % 24 !== 0) {
              hourString = 12
            }

            content = (
              <>
                <HourLine transparent={hour === 2}/>
                <Hour>{hourString}{language.locale === 'en' ? (hour + FIRST_DAY_START_HOUR) % HOURS_PER_DAY  < 12 ? 'am' : 'pm' : ':00'}</Hour>
                <HourLine transparent={hour === NUMBER_OF_HOURS - 2}/>
              </>
            )
          }

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
  left: calc(var(--timeline-width-per-hour) / 2 * -1);

  display: flex;
`;

const HourContainer = styled.div`
  display: flex;
  
  width: var(--timeline-width-per-hour);
  min-width: var(--timeline-width-per-hour);
  max-width: var(--timeline-width-per-hour);
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
