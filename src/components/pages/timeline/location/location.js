import { useState } from "react";
import styled from "styled-components";

import TimelineFloors from '@/components/pages/timeline/floor/floors'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";

export default function TimelineLocation({ location }) {
  const [showContent, setShowContent] = useState(false)
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
  width: ${({theme}) => theme.timeline.width};
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

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};
  width: 100vw;

  padding: ${({theme}) => theme.box.padding};

  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.small};
  color:  ${({theme}) => theme.colors.white};

  background-color: ${({theme}) => theme.colors.gray};
  
  cursor: pointer;
  
  :hover {
    color:  ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.pink};
    border: ${({theme}) => theme.border};
    border-left: 0;
  }
`;
