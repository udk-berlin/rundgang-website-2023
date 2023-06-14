import styled from "styled-components";

const Container = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  line-height: 1;
  display: block;

  &::first-letter {
    initial-letter: 2;
    font-family: "Gabriella";
    font-size: 2rem;
    color: var(--color-pink);
    padding-right: 4px;
  }
`;

export default function ProjectTitle({ fontSize = 2, children }) {
  return <Container fontSize={fontSize}>{children}</Container>;
}
