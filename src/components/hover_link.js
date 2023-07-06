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
    padding: 0.15rem 0.35rem;
  }
`;

export function HoverLink({ href = "/", setIsLinkClicked, children }) {
  return (
    <HoverLinkContainer>
      <LocalizedLink setIsLinkClicked={setIsLinkClicked} href={href}>
        <div>{children}</div>
      </LocalizedLink>
    </HoverLinkContainer>
  );
}
