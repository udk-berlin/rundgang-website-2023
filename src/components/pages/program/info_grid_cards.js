import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
`;

const ItemWrapper = styled.div`
  margin-top: var(--info-border-width);
  display: inline;
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: ${(props) => props.margin};

  & > div {
    padding: 0.2rem 0.4rem;
  }
`;

const Item = ({ margin, children }) => {
  return (
    <ItemWrapper margin={margin}>
      <div>{children}</div>
    </ItemWrapper>
  );
};

export const InfoGridLocation = ({ prop }) => {
  return (
    <Container>
      <Item margin="170px">Hardenbergstr. 33</Item>
      <Item margin="10px">Etage: 2</Item>
      <Item margin="50px">Raum: 243/244</Item>
    </Container>
  );
};

export const InfoGridContext = ({ prop }) => {
  return (
    <Container>
      <Item margin="50px">Fakultät Bildende Künste</Item>
      <Item margin="150px">Institut für Kunst</Item>
      <Item margin="100px">Malerei / Zeichnen</Item>
      <Item margin="50px">Fachklasse Streuli</Item>
    </Container>
  );
};
