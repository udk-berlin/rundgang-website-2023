import { HoverLink } from "@/components/hoverLink";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
`;

const Date = styled.div`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  padding: 0.2rem 0.4rem;
`;

const ClickableDate = styled(Date)`
  display: flex;
  justify-content: space-evenly;
`;

const HoverLinkDate = styled(HoverLink)`
  grid-column-start: ${(props) => props.position};
`;

export default function InfoGridDate({ Day }) {
  return (
    <Container>
      <Date>
        <span>Date:</span>
      </Date>
      <HoverLinkDate position={Day}>
        <Link href="/">
          <ClickableDate>
            <span>Fri</span>
            <span>16.07.</span>
          </ClickableDate>
        </Link>
      </HoverLinkDate>
    </Container>
  );
}

// function checkDate(day) {
//   if day
// }
