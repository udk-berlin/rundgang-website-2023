import styled from "styled-components";

import { HoverLink } from "@/components/hover_link";
import { LocalizedLink } from "@/components/localization/links";

const dayToWeekDayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function InfoGridDate({ start, end }) {
  const date = new Date((start - 7200) * 1000);
  return (
    <InfoGridDateContainer>
      <TitleContainer>
        <span>Date:</span>
      </TitleContainer>
      <HoverLinkDate date={date}>
        <LocalizedLink href="/">
          <ClickableDate>
            <span>{dayToWeekDayMapper[date.getDay()]}</span>
            <span>{date.getDate() + "." + date.getMonth() + "."}</span>
          </ClickableDate>
        </LocalizedLink>
      </HoverLinkDate>
    </InfoGridDateContainer>
  );
}

const InfoGridDateContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 2fr 2fr 2fr;

  & > * {
    outline: var(--info-border-width) solid var(--info-border-color);
    margin-top: var(--info-border-width);
    margin-left: var(--info-border-width);

    padding: 0.2rem 0.4rem;
    background-color: var(--color-white);
    color: #000;
  }

  & > *:nth-last-child(1) {
    margin-right: var(--info-border-width);
  }
`;

const TitleContainer = styled.div`
  align-self: start;
  width: fit-content;
`;

const ClickableDate = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const HoverLinkDate = styled(HoverLink)`
  grid-column-start: ${(prop) => dateToPosition(prop.date)};
  align-self: stretch;
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
