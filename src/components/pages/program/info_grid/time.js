import { InfoGridItem } from "@/components/pages/program/info_grid/item";
import styled from "styled-components";

export default function InfoGridTime({ start, end }) {
  return (
    <InfoGridTimeContainer pos={timeToMarginWidth(start, end)}>
      <TimeContainer date={start} />
      <Line />
      <TimeContainer date={end} />
    </InfoGridTimeContainer>
  );
}

const InfoGridTimeContainer = styled(InfoGridItem)`
  margin-left: ${(prop) => prop.pos[0]}%;
  min-width: 105px;
  width: ${(prop) => prop.pos[1]}%;

  display: flex;
  align-items: center;
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
  let endOfDay = 23;
  let lengthOfDay = endOfDay - startOfDay;

  let margin =
    scale(start.getHours(), startOfDay, endOfDay, 0, 100) +
    scale(start.getMinutes(), 0, 59, 0, 100 / lengthOfDay);
  let width =
    scale(end.getHours() - start.getHours(), 0, lengthOfDay, 0, 100) +
    scale(end.getHours() - start.getHours(), 0, 59, 0, 100 / lengthOfDay);

  return [margin, width];
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
