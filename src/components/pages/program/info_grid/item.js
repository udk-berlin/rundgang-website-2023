import { HoverLink } from "@/components/hover_link";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const InfoGridItemLinkContainer = styled.div`
  background-color: var(--color-white);
  color: #000;

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  margin-left: ${(props) => props.margin};
`;

const InfoGridItemContainer = styled(InfoGridItemLinkContainer)`
  padding: 0.2rem 0.4rem;
`;

export default function InfoGridItemLink({
  className,
  href,
  children,
  margin,
}) {
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

export function InfoGridCardItem({ className, children, margin }) {
  const inlineRef = useRef(null);
  const borderRef = useRef(null);
  useEffect(() => {
    borderRef.current.style.width = inlineRef.current.offsetWidth + 20 + "px";
  }, []);
  return (
    <InfoGridItemContainer
      ref={borderRef}
      className={className}
      margin={margin}
    >
      <div style={{ display: "inline" }} ref={inlineRef}>
        {children}
      </div>
    </InfoGridItemContainer>
  );
}

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
