import styled from "styled-components";

import TimelineProjectsBar from "@/components/pages/timeline/project";
import TimelineLocationFloor from "@/components/pages/timeline/location/floor";
import TimelineLocation from "@/components/pages/timeline/location/location";
import TimelineLocationRoom from "@/components/pages/timeline/location/room";

import { mapTimeToX, GRID_OFFSET } from "@/components/pages/timeline/constants";

export default function TimelineLocations() {
  mapTimeToX(GRID_OFFSET)

  return (
    <TimelineLocationsContainer>
      <TimelineLocationsInnerContainer key={`location-${1}`}>
        <TimelineLocation />
        <TimelineLocationFloor/>
        <TimelineLocationRoom room={{name: 'Alle Räume'}} />
        <TimelineLocationRoom room={{name: 'Raum 53'}} />


        {/*<LocationRoomContainer key={`room-${1}`} width={6000}>*/}
        {/*  <LocationRoomTitleContainer width={locWidth}>*/}
        {/*    <LocationRoomTitle>Raum 53</LocationRoomTitle>*/}
        {/*  </LocationRoomTitleContainer>*/}

        {/*  <ProjectsContainer>*/}
        {/*    <TimelineProjectsBar*/}
        {/*      top={0}*/}
        {/*      start={scaleX(1658566800) - locWidth}*/}
        {/*      end={scaleX(1658610000) - locWidth}*/}
        {/*      children={true}*/}
        {/*    >*/}
        {/*      Rundgangeröffnung / Opening*/}
        {/*    </TimelineProjectsBar>*/}
        {/*  </ProjectsContainer>*/}

        {/*</LocationRoomContainer>*/}

      </TimelineLocationsInnerContainer>
    </TimelineLocationsContainer>
  );
}

const TimelineLocationsContainer = styled.div`
  width: ${({ width }) => width}px;
  height: fit-content;
  position: relative;
  z-index: 0;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const TimelineLocationsInnerContainer = styled.div`
  position: relative;
`;

const LocationRoomContainer = styled.div`
  height: 100%;
  width: ${({ width }) => width}px;
  // border-bottom: 1px solid black;
  position: relative;
  display: flex;
  align-items: flex-start;
  
  &::after {
    height: 100%;
  }
`;