import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 10%;
  width: 80%;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  padding: 0.2rem 0.4rem;
`;

const Line = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid black;
  margin: 5px;
`;

export default function InfoGridTime({ begin, end }) {
  return (
    <Container>
      <div>{begin}</div>
      <Line />
      <div>{end}</div>
    </Container>
  );
}

export { Line };
