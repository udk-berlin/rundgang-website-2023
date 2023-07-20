import styled from "styled-components";

import { TimelineLink } from "@/components/localization/links";

const dayToWeekDayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ProjectInfoGridDay({ date }) {
  return (
    <InfoGridDayContainer>
      <Box>
        <span>Date:</span>
      </Box>

      <StyledTimelineLink>
        <TimelineLink href={'/timeline'}>
          <DateContainer day={date.start}>
            <span>{dayToWeekDayMapper[date.start.getDay()]}</span>
            <span>{date.start.getDate() + "." + (date.start.getMonth() + 1) + "."}</span>
          </DateContainer>
        </TimelineLink>
      </StyledTimelineLink>
    </InfoGridDayContainer>
  );
}

const InfoGridDayContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 1fr 1fr;
  & > *:nth-last-child(1) {
    margin-right: var(--info-border-width);
  }
`;

const Box = styled.div`
  margin-top: ${({ theme }) => theme.borderWidth};
  margin-left:  ${({ theme }) => theme.borderWidth};
  margin-left: ${({ margin }) => margin }%;

  padding: ${({ theme }) => theme.box.padding};

  background: white;
  outline: ${({ theme }) => theme.border};
  
  font-size: 0.7rem;
  font-weight: 500;
  color: black;
`;

const StyledTimelineLink = styled.div`
  *:hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }
`;

const DateContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  grid-column-start: ${(props) => dateToPosition(props.day)};
`;

function dateToPosition(date) {
  let position;
  switch (date.getDay()) {
    case 5:
      position = 2;
      break;
    case 6:
      position = 3;
      break;
    case 0:
      position = 4;
      break;
    default:
      position = 2;
  }
  return position;
}
