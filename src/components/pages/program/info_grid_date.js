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
  display: flex;
  justify-content: space-evenly;
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  padding: 0.2rem 0.4rem;
`;

const ClickableDate = styled(Date)`
  pointer-events: auto;

  &:hover {
    background-color: var(--color-pink);
  }
`;

export default function InfoGridDate({ children }) {
  return (
    <Container>
      <Date>
        <span>Date:</span>
      </Date>
      <Link href="/">
        <ClickableDate>
          <span>Fri</span>
          <span>16.07.</span>
        </ClickableDate>
      </Link>

      <Link href="/">
        <ClickableDate>
          <span>Sat</span>
          <span>17.07.</span>
        </ClickableDate>
      </Link>

      <Link href="/">
        <ClickableDate>
          <span>Sun</span>
          <span>18.07.</span>
        </ClickableDate>
      </Link>
    </Container>
  );
}
