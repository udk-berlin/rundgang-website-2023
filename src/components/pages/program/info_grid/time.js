import styled from "styled-components";

import { InfoGridItem } from "@/components/pages/program/info_grid/item";
import { TimelineLink } from "@/components/localization/links";

export default function InfoGridTime({ start, end }) {
  return (
    <StyledTimelineLink>
      <TimelineLink href={'/timeline'}>
        <InfoGridTimeContainer
          pos={timeToMarginWidth(start, end)}
          margin={timeToMarginWidth(start, end)[0]}
        >
          <TimeContainer date={start} />
          <Line />
          <TimeContainer date={end} />
        </InfoGridTimeContainer>
      </TimelineLink>
    </StyledTimelineLink>
  );
}

const InfoGridTimeContainer = styled(InfoGridItem)`
  min-width: 110px;
  width: ${({ pos }) => pos[1]}%;

  display: flex;
  align-items: center;

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

function timeToMarginWidth(start, end) {
  let startOfDay = 10;
  let endOfDay = 24;
  let lengthOfDay = endOfDay - startOfDay;

  let margin =
    scale(start.getHours(), startOfDay, endOfDay, 0, 100) +
    scale(start.getMinutes(), 0, 59, 0, 100 / lengthOfDay);
  let width =
    scale(end.getHours() - start.getHours(), 0, lengthOfDay, 0, 100) +
    scale(end.getHours() - start.getHours(), 0, 59, 0, 100 / lengthOfDay);

  return [margin, width];
}

export function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
