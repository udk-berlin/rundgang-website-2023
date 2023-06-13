import { HoverLink } from "@/components/hover_link";
import Link from "next/link";
import styled from "styled-components";

const HoverLinkEvent = styled(HoverLink)`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: 70%;
`;

const Container = styled.div`
  padding: 0.2rem 0.4rem;
`;

export default function InfoGridEvent({ eventType }) {
  return (
    <HoverLinkEvent>
      <Link href="/">
        <Container>{eventType}</Container>
      </Link>
    </HoverLinkEvent>
  );
};
