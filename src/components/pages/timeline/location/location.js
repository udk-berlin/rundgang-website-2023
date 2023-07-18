import styled from "styled-components";

import TimelineFloors from '@/components/pages/timeline/floor/floors'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";
import { LocalizedLink } from "@/components/localization/links";

export default function TimelineLocation({ location }) {
  const floors = Object.values(location.children).filter(child => child.template === 'location-level')
  const projectIds = Object.values(location.children).filter(child => child.type === 'item').map(child => child.id)

  return (
    <LocationContainer>
      <LocationTitleContainer id={location.id}>
        <LocalizedLink href={`/locations/${location.id}`}>
          {location.name}
        </LocalizedLink>
      </LocationTitleContainer>

      <LocationContentPlaceholder />
      <LocationContentContainer>
        <TimelineFloors floors={floors} />
        {projectIds.length > 0 ? <TimelineProjectsGroups projectIds={projectIds} /> : <></>}
      </LocationContentContainer>
    </LocationContainer>
  );
}

const LocationContentPlaceholder = styled.div`
  width: ${({theme}) => theme.width};
`;

const LocationContentContainer = styled.div``;

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
  
  a {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    padding: ${({theme}) => theme.box.padding};

    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: ${({theme}) => theme.fontWeights.small};
    color:  ${({theme}) => theme.colors.white};

    background-color: ${({theme}) => theme.colors.gray};

    :hover {
      color:  ${({theme}) => theme.colors.white};
      background-color: ${({theme}) => theme.colors.pink};
      border: ${({theme}) => theme.border};
      border-left: 0;
    }
  }
`;
