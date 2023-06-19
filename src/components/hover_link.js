import { LocalizedLink } from "@/components/localization/links";
import styled from "styled-components";

export const HoverLinkContainer = styled.div`
  pointer-events: none;

  &:hover {
    background-color: var(--color-pink);
  }

  &:hover > a {
    color: var(--color-white);
  }

  & > a {
    pointer-events: auto;
    display: block;
    text-align: center;
  }

  & > a > div {
    padding: 0.2rem 0.4rem;
  }
`;

export function HoverLink({ href = "/", children }) {
  return (
    <HoverLinkContainer>
      <LocalizedLink href={href}>
        <div>{children}</div>
      </LocalizedLink>
    </HoverLinkContainer>
  );
}
