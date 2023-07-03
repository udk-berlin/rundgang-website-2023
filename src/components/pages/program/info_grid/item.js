import { HoverLink } from "@/components/hover_link";
import { scale } from "@/components/pages/program/info_grid/time";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const InfoGridItemLinkContainer = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  background-color: var(--color-white);
  color: #000;

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);
  margin-left: var(--info-border-width);

  margin-left: ${(props) => props.margin}%;
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
    borderRef.current.style.marginLeft =
      scale(hashCode(inlineRef.current.textContent), 0, 99, 0, 70) + "%";
    borderRef.current.style.width =
      inlineRef.current.offsetWidth + convertRemToPixels(0.8) + "px";
    borderRef.current.style.minWidth =
      inlineRef.current.offsetWidth + convertRemToPixels(0.8) + "px";
    borderRef.current.style.maxWidth =
      inlineRef.current.offsetWidth + convertRemToPixels(0.8) + "px";
  }, []);

  return (
    <InfoGridItemContainer
      ref={borderRef}
      className={className}
      // margin={margin}
    >
      <div style={{ display: "inline" }} ref={inlineRef}>
        {children}
      </div>
    </InfoGridItemContainer>
  );
}

function convertRemToPixels(rem) {
  return Math.round(
    rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
    hash = Math.abs(hash);
  }

  let sub = String(hash).substring(0, 2);
  hash = Number(sub);
  return hash;
}

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}
