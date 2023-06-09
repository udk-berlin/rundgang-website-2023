import styled from "styled-components";
import InfoGridDate from "./info_grid_date";
import InfoGridTime from "./info_grid_time";
import { InfoGridEvent } from "./info_grid_event";

const Container = styled.div`
  display: grid;
  row-gap: 0.75rem;
  justify-items: start;
  font-size: 0.7rem;
  font-weight: 500;
`;

export default function InfoGrid() {
  return (
    <Container>
      <InfoGridEvent EventType="Tanz"></InfoGridEvent>
      <div>
        <InfoGridDate Day="3" />
        <InfoGridTime begin="10:00" end="20:00" />
      </div>
    </Container>
  );
}
