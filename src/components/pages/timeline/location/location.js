import styled from "styled-components";

import { BOX_HEIGHT } from "@/components/pages/timeline/constants";

export default function TimelineLocation() {

  const location = {
    name: 'Hardenbergstraße 33',
    id: "0"
  }

  return (
    <LocationContainer id={location.id}>
      {location.name}
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  position: sticky;
  z-index: 3;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;

  height: ${BOX_HEIGHT + 2}px;
  min-height: ${BOX_HEIGHT + 2}px;
  max-height: ${BOX_HEIGHT + 2}px;
  width: 100vw;

  padding: var(--info-grid-padding);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-white);

  background-color: var(--color-dark-gray);
`;
