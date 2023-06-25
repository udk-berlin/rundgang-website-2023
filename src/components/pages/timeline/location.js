import styled from "styled-components";

import { BOX_HEIGHT } from "@/components/pages/timeline/constants";
import TimelineFloors from '@/components/pages/timeline/floors'

export default function TimelineLocation({ location, projects }) {
  return (
    <>
      <LocationContainer id={location.id}>
        {location.name}
      </LocationContainer>

      <TimelineFloors location={location} projects={projects} />
    </>
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
