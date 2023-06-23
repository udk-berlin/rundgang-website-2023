import styled from "styled-components";

import { TIMELINE_WIDTH, BOX_HEIGHT } from "@/components/pages/timeline/constants";
export default function TimelineLocation() {
  return (
    <LocationContainer width={TIMELINE_WIDTH}>
      <LocationTitleContainer>
        <LocationTitle>Hardenbergstraße 33</LocationTitle>
      </LocationTitleContainer>
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  position: relative;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;

  padding: 0.2rem 0.6rem;
 
  background-color: var(--color-dark-gray);
`;

const LocationTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 0.6rem;
  top: 0;

  display: flex;
  align-items: center;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: 30px;
`;

const LocationTitle = styled.div`
  width: fit-content;
  height: 100%;

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-white);

  white-space: nowrap;
`;
