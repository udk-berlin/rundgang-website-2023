import styled from "styled-components";

import { TIMELINE_WIDTH, BOX_HEIGHT } from "@/components/pages/timeline/constants";

export default function TimelineLocationFloor() {
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

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;

const FloorTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 0.6rem;
  top: 0;
  
  display: flex;
  align-items: center;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
`;

const FloorTitle = styled.div`
  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
  
  padding: var(--info-grid-padding);
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  white-space: nowrap;
`;
