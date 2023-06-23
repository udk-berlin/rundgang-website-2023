import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";
import TimelineProjectsBar from "@/components/pages/timeline/projects/bar";
import TimelineLocationFloor from "@/components/pages/timeline/location/floor";
import TimelineLocation from "@/components/pages/timeline/location/location";
import TimelineLocationRoom from "@/components/pages/timeline/location/room";

export default function TimelineLocations({ scaleX, locWidth }) {
  return (
    <TimelineLocationsContainer>
      <TimelineLocationsInnerContainer key={`location-${1}`}>
        <TimelineLocation locWidth={locWidth} />
        <TimelineLocationFloor locWidth={locWidth}/>
        <TimelineLocationRoom room={{locWidth: locWidth, name: 'Alle Räume'}} />
        <TimelineLocationRoom room={{locWidth: locWidth, name: 'Raum 53'}} />


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