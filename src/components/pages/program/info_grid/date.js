import styled from "styled-components";

import { HoverLink } from "@/components/hover_link";
import { LocalizedLink } from "@/components/localization/links";

const dayToWeekDayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function InfoGridDate({ start, end }) {
  const date = new Date((start - 7200) * 1000);
  return (
    <InfoGridDateContainer>
      <DateContainer>
        <span>Date:</span>
      </DateContainer>
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
  grid-template-columns: 1fr 2fr 2fr 2fr;
`;

const DateContainer = styled.div`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  padding: 0.2rem 0.4rem;
  background-color: var(--color-white);
  color: #000;
`;

const ClickableDate = styled(DateContainer)`
  display: flex;
  justify-content: space-evenly;
`;

const HoverLinkDate = styled(HoverLink)`
  grid-column-start: ${(prop) => dateToPosition(prop.date)};
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
