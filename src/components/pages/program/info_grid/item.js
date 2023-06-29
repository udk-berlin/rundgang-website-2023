import { HoverLink } from "@/components/hover_link";
import styled from "styled-components";

export default function InfoGridItemLink({className, href, children, margin,}) {
  return (
    <InfoGridItemLinkContainer className={className} margin={margin}>
      <HoverLink href={href}>{children}</HoverLink>
    </InfoGridItemLinkContainer>
  );
}

export function InfoGridItem({ className, children, margin }) {
  return (
    <InfoGridItemContainer className={className} margin={margin}>
      {children}
    </InfoGridItemContainer>
  );
}

const InfoGridItemLinkContainer = styled.div`
  background: var(--color-white);
  color: var(--color-black);

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  margin-left: ${({ margin }) => margin};
`;

const InfoGridItemContainer = styled(InfoGridItemLinkContainer)`
  padding: var(--info-grid-padding);
`;

