import styled from "styled-components";

import { TimelineLink } from "@/components/localization/links";

export default function ProjectInfoGridTime({ date }) {
  const position = dateToPosition(date.start, date.end)

  return (
    <StyledTimelineLink>
      <TimelineLink href={'/timeline'}>
        <InfoGridTimeContainer width={position.width} margin={position.margin}>
          <TimeContainer date={date.start} />
          <Line />
          <TimeContainer date={date.end} />
        </InfoGridTimeContainer>
      </TimelineLink>
    </StyledTimelineLink>
  );
}

const InfoGridTimeContainer = styled.div`
  display: flex;
  align-items: center;
  
  min-width: 110px;
  width: ${({ width }) => width}%;
  
  margin-top:  ${({ theme }) => theme.borderWidth};
  margin-left: ${({ margin }) => margin }%;

  padding: ${({ theme }) => theme.box.padding};

  font-size: 0.7rem;
  font-weight: 500;
  color: black;
  
  background: white;
  outline: ${({ theme }) => theme.border};
  
  :hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }

  & > :nth-last-child(1) {
    margin-right: var(--info-border-width);
  }
`;

const StyledTimelineLink = styled.div`
  div:hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }
`;

export function TimeContainer({ date }) {
  return (
    <div>
      {String(date.getHours()).padStart(2, "0") +
        ":" +
        String(date.getMinutes()).padStart(2, "0")}
    </div>
  );
}

const Line = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid var(--color-pink);
  margin: 5px;
`;

function dateToPosition(start, end) {
  let startOfDay = 10;
  let endOfDay = 24;
  let lengthOfDay = endOfDay - startOfDay;

  let margin =
    scale(start.getHours(), startOfDay, endOfDay, 0, 100) +
    scale(start.getMinutes(), 0, 59, 0, 100 / lengthOfDay);
  let width =
    scale(end.getHours() - start.getHours(), 0, lengthOfDay, 0, 100) +
    scale(end.getHours() - start.getHours(), 0, 59, 0, 100 / lengthOfDay);

  if (margin > 62) {
    margin = 62
  }

  if (width < 0) {
    width = 100 - margin - 1
  }

  return {margin, width};
}

export function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
