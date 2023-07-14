import { useState, useEffect } from "react";
import styled from "styled-components";

import TimelineFloors from '@/components/pages/timeline/floor/floors'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";
import { useTheme } from "styled-components";

export default function TimelineLocation({ location }) {
  const theme = useTheme()
  const [showContent, setShowContent] = useState(false)
  const floors = Object.values(location.children).filter(child => child.template === 'location-level')
  const projectIds = Object.values(location.children).filter(child => child.type === 'item').map(child => child.id)

  useEffect(() => {
    if (theme?.id === 'l') {
      setShowContent(true)
    } else {
      setShowContent(false)
    }
  }, [theme])

  return (
    <LocationContainer>
      <LocationTitleContainer id={location.id} onClick={() => setShowContent(!showContent)}>
        {location.name}
      </LocationTitleContainer>

      <LocationContentPlaceholder />
      <LocationContentContainer showContent={showContent}>
        <TimelineFloors floors={floors} />
        {projectIds.length > 0 ? <TimelineProjectsGroups projectIds={projectIds} /> : <></>}
      </LocationContentContainer>
    </LocationContainer>
  );
}

const LocationContentPlaceholder = styled.div`
  width: ${({theme}) => theme.width};
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
