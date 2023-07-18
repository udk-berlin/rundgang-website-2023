import { InfoGridItem } from "@/components/pages/program/info_grid/item";
import styled from "styled-components";

const dayToWeekDayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function InfoGridDay({ projectTime }) {
  return (
    <InfoGridDayContainer>
      <InfoGridItem>
        <span>Date:</span>
      </InfoGridItem>
      <DateContainer day={projectTime[0]}>
        <span>{dayToWeekDayMapper[projectTime[0].getDay()]}</span>
        <span>
          {projectTime[0].getDate() +
            "." +
            (projectTime[0].getMonth() + 1) +
            "."}
        </span>
      </DateContainer>
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

const DateContainer = styled(InfoGridItem)`
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
