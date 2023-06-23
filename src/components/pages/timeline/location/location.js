import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";

export default function TimelineLocation({ locWidth }) {
  return (
    <LocationContainer width={TIMELINE_WIDTH}>
      <LocationTitleContainer width={locWidth}>
        <LocationTitle>Hardenbergstraße 33</LocationTitle>
      </LocationTitleContainer>
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  position: relative;

  min-height: 30px;
  width: ${({ width }) => width}px;

  padding: 0.2rem 0.6rem;
 
  background-color: var(--color-dark-gray);
`;

const LocationTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 0.2rem;
  top: 0;

  display: flex;
  align-items: center;

  width: ${({ width }) => width}px;
  min-height: 30px;
  height: 100%;
`;

const LocationTitle = styled.div`
  width: fit-content;
  height: 100%;

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-white);

  white-space: nowrap;
`;
