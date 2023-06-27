import { useState } from "react";
import styled from "styled-components";

import TimelineFloors from '@/components/pages/timeline/floor/floors'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";
import { TIMELINE_WIDTH } from "@/components/pages/timeline/constants";

export default function TimelineLocation({ location }) {
  const [showContent, setShowContent] = useState(true)
  const floors = Object.values(location.children).filter(child => child.template === 'location-level')
  const projects = Object.values(location.children).filter(child => child.type === 'item')

  return (
    <LocationContainer>
      <LocationTitleContainer id={location.id} onClick={() => setShowContent(!showContent)}>
        {location.name}
      </LocationTitleContainer>

      <LocationContentPlaceholder />
      <LocationContentContainer showContent={showContent}>
        <TimelineFloors floors={floors} />
        <TimelineProjectsGroups projects={projects} />
      </LocationContentContainer>
    </LocationContainer>
  );
}

const LocationContentPlaceholder = styled.div`
  width: ${TIMELINE_WIDTH}px;
`;

const LocationContentContainer = styled.div`
  display: ${({ showContent }) => showContent ? 'inline' : 'none'};
`;

const LocationContainer = styled.div`
  margin-bottom: 1rem;
`;

const LocationTitleContainer = styled.div`
  position: sticky;
  z-index: 3;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;

  height: var(--calender-location-height);
  min-height: var(--calender-location-height);
  max-height: var(--calender-location-height);
  width: 100vw;

  padding: var(--info-grid-padding);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-white);

  background-color: var(--color-dark-gray);
  
  cursor: pointer;
  
  :hover {
    color: var(--color-white);
    background-color: var(--color-pink);
    border: var(--calender-box-border)
  }
`;
