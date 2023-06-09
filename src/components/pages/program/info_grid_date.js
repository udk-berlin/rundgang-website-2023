import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;

  pointer-events: none;

  & > a {
    text-align: center;
  }

  & > a:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const Date = styled.div`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  padding: 0.2rem 0.4rem;
`;

const ClickableDate = styled(Date)`
  pointer-events: auto;
  grid-column-start: ${(props) => props.position};
  pointer-events: none;

  &:hover {
    background-color: var(--color-pink);
    color: #fff;
  }
  & > a {
    pointer-events: auto;
    display: block;
    display: flex;
    justify-content: space-evenly;
  }
  & > a:hover {
    color: #fff;
  }
`;

export default function InfoGridDate({ Day }) {
  return (
    <Container>
      <Date>
        <span>Date:</span>
      </Date>
      <ClickableDate position={Day}>
        <Link href="/">
          <span>Fri</span>
          <span>16.07.</span>
        </Link>
      </ClickableDate>
    </Container>
  );
}

// function checkDate(day) {
//   if day
// }
