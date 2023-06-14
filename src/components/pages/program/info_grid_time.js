import styled from "styled-components";

export default function InfoGridTime({ start, end }) {
  const startTime = new Date((start - 7200) * 1000);
  const endTime = new Date((end - 7200) * 1000);
  return (
    <Container>
      <TimeContainer date={startTime} />
      <Line />
      <TimeContainer date={endTime} />
    </Container>
  );
}

const Container = styled.div`
  margin-left: 60%;
  width: 30%;

  display: flex;
  align-items: center;

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  padding: 0.2rem 0.4rem;
`;

const Line = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid var(--color-pink);
  margin: 5px;
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
