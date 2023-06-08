import styled from "styled-components";

const Container = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  flex: 0 0 auto;

  &:not(:last-child):after {
    content: "/";
    padding: 0 1rem;
  }
`;

export default function ProjectPageAuthors({ fontSize = 1, children }) {
  return <Container fontSize={fontSize}>{children}</Container>;
}
