import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: 70%;
  padding: 0.2rem 0.4rem;
`;

export const InfoGridEvent = ({ EventType }) => {
  return <Container>{EventType}</Container>;
};
