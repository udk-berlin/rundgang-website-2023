import React, {useEffect, useState} from 'react'
import { useIntl } from "react-intl";
import styled from "styled-components";

import { breakpoints, HOURS_PER_DAY, NUMBER_OF_HOURS, HOURS_PER_HALF_DAY, NUMBER_OF_HALF_DAYS, FIRST_DAY_START_HOUR } from "@/themes/theme";
import useWindowSize from "@/hooks/window_size";
import { range } from "@/utils/range";

export default function TimelineHours() {
  const windowSize = useWindowSize()
  const [useHalfDayHours, setUseHalfDayHours] = useState(false);

  useEffect(() => {
    if (windowSize.width <= breakpoints.mobile) {
      setUseHalfDayHours(true)
    } else {
      setUseHalfDayHours(false)
    }
  }, [windowSize.width])

  return (
    <HoursContainer>
      <HoursInnerContainer>
        {
          useHalfDayHours ?
            <HalfDayHours /> :
            <AllHours />
        }
      </HoursInnerContainer>
    </HoursContainer>
  );
}

function AllHours() {
  const language = useIntl();

  return (
    <>
      {
        range(0, NUMBER_OF_HOURS).map(hourIndex => {
          let content;

          if (hourIndex > 1 && hourIndex < NUMBER_OF_HOURS - 1) {
            let hour = (hourIndex + FIRST_DAY_START_HOUR) % (language.locale === 'en' ? HOURS_PER_HALF_DAY : HOURS_PER_DAY)
            if (hour === 0 && language.locale === 'en' && (hourIndex + FIRST_DAY_START_HOUR) % HOURS_PER_DAY !== 0) {
              hour = HOURS_PER_HALF_DAY
            }

            content = (
              <>
                <HourLine transparent={hourIndex === 2}/>
                <Hour>{hour}{language.locale === 'en' ? (hourIndex + FIRST_DAY_START_HOUR) % HOURS_PER_DAY  < HOURS_PER_HALF_DAY ? 'am' : 'pm' : ':00'}</Hour>
                <HourLine transparent={hourIndex === NUMBER_OF_HOURS - 2}/>
              </>
            )
          }

          return (
            <HourContainer>
              {content}
            </HourContainer>
          )
        })
      }
    </>
  );
}

function HalfDayHours() {
  const language = useIntl();

  return (
    <>
      {
        range(0, NUMBER_OF_HALF_DAYS).map(halfDay => {
          let content;
          let hour = ((halfDay * HOURS_PER_HALF_DAY) + FIRST_DAY_START_HOUR + 2) % HOURS_PER_DAY

          content = (
            <>
              <HourLine transparent={halfDay === 0}/>
              <Hour>{hour}{language.locale === 'en' ? hour % HOURS_PER_DAY < HOURS_PER_HALF_DAY ? 'am' : 'pm' : ':00'}</Hour>
              <HourLine transparent={halfDay === NUMBER_OF_HALF_DAYS - 1}/>
            </>
          )

          return (
            <HourContainer>
              {content}
            </HourContainer>
          )
        })
      }
    </>
  );
}

const HoursContainer = styled.div`
  display: flex;

  height: ${({ theme }) => theme.timeline.hours.height};
  min-height: ${({ theme }) => theme.timeline.hours.height};
  max-height: ${({ theme }) => theme.timeline.hours.height};
  width: ${({ theme }) => theme.timeline.width};

  background-color:  ${({theme}) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.border};

  cursor: default;
`;

const HoursInnerContainer = styled.div`
  position: relative;
  left: calc(${({ theme }) => theme.timeline.widthPerHour} / 2 * -1);

  display: flex;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    left: calc(${({ theme }) => theme.timeline.widthPerHour} * 4 * -1);
  }
`;

const HourContainer = styled.div`
  display: flex;
  
  width: ${({ theme }) => theme.timeline.widthPerHour};
  min-width: ${({ theme }) => theme.timeline.widthPerHour};
  max-width: ${({ theme }) => theme.timeline.widthPerHour};
  height: 100%;
  
  color: black;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: calc(${({ theme }) => theme.timeline.widthPerHour} * 12);
    min-width: calc(${({ theme }) => theme.timeline.widthPerHour} * 12);
    max-width: calc(${({ theme }) => theme.timeline.widthPerHour} * 12);
  }
`

const Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  
  font-size: ${({ theme }) => theme.timeline.hours.fontSize};
  font-weight: ${({ theme }) => theme.timeline.hours.fontWeight};
  color: ${({theme}) => theme.colors.black};
`

const HourLine = styled.div`
  flex-grow: 1;
  margin-bottom: calc(calc(${({ theme }) => theme.timeline.hours.height} - 2 * ${({ theme }) => theme.borderWidth}) / 2);
  border-bottom: ${({ theme, transparent }) => transparent ? 0 : `${theme.borderWidth} solid ${theme.colors.pink}`};
`
