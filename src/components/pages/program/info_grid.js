import styled from "styled-components";
import InfoGridDate from "./info_grid_date";
import InfoGridTime from "./info_grid_time";

const Container = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
`;

export default function InfoGrid() {
  return (
    <Container>
      <InfoGridDate />
      <InfoGridTime begin="10:00" end="20:00" />
    </Container>
  );
}
