import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";

export default function TimelineLocationFloor({ scaleX, locWidth }) {
  return (
    <FloorContainer width={TIMELINE_WIDTH}>
      <FloorTitleContainer width={0}>
        <FloorTitle width={TIMELINE_WIDTH}>Etage: 0</FloorTitle>
      </FloorTitleContainer>
    </FloorContainer>

  );
}

const FloorContainer = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;

  width: ${({ width }) => width}px;

  margin-left: 0.4rem;

  border: var(--border-width) solid var(--border-color);
  border-top: 0;

  background: var(--color-white);
  color: var(--color-black);
`;

const FloorTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 0.6rem;
  top: 0;
  
  display: flex;
  align-items: center;

  width: ${({ width }) => width}px;
  min-height: 30px;
`;

const FloorTitle = styled.div`
  width: ${({ width }) => width}px;
  min-height: 30px;
  
  padding: var(--info-grid-padding);
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  white-space: nowrap;

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;
