import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";
import TimelineProjectsBar from "@/components/pages/timeline/projects/bar";

export default function TimelineLocations({ scaleX, locWidth }) {
  return (
    <TimelineLocationsContainer>
      <TimelineLocationsInnerContainer key={`location-${1}`}>
        <LocationContainer>
          <LocationTitleContainer width={locWidth}>
            <LocationTitleInnerContainer>Hardenbergstraße 33</LocationTitleInnerContainer>
          </LocationTitleContainer>
        </LocationContainer>

        <LocationRoomContainer key={`room-${1}`} width={6000}>
          <LocationRoomTitleContainer width={locWidth}>
            <LocationRoomTitle></LocationRoomTitle>
          </LocationRoomTitleContainer>
          <ProjectsContainer>
            <TimelineProjectsBar
              start={scaleX(1658566800) - locWidth}
              end={scaleX(1658610000) - locWidth}
            >
                  Öffnungszeiten: Samstag, 23.7., 11:00–23:00 Uhr
            </TimelineProjectsBar>
          </ProjectsContainer>
        </LocationRoomContainer>

        {/*<LocationRoomContainer key={`room-${1}`} width={6000}>*/}
        {/*  <LocationRoomTitleContainer width={locWidth}>*/}
        {/*    <LocationRoomTitle>53</LocationRoomTitle>*/}
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


        {/*<LocationRoomContainer key={`room-${1}`} width={6000}>*/}
        {/*  <LocationRoomTitleContainer width={locWidth}>*/}
        {/*    <LocationRoomTitle>53</LocationRoomTitle>*/}
        {/*  </LocationRoomTitleContainer>*/}

        {/*  <ProjectsContainer>*/}
        {/*    <TimelineProjectsBar*/}
        {/*      top={0}*/}
        {/*      start={scaleX(1658566800) - locWidth}*/}
        {/*      end={scaleX(1658610000) - locWidth}*/}
        {/*      children={true}*/}
        {/*    >*/}
        {/*      Performance: "Reminds me of you - diary of sick person", Francis Kussatz, 2022*/}
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

const Location = styled.div`
  height: 100%;
  width: ${TIMELINE_WIDTH}px;
  border-bottom: 1px solid black;
  position: relative;
  display: flex;
  align-items: flex-start;
  
  &::after {
    height: 100%;
  }
`;

const LocationContainer = styled(Location)`
  min-height: 100px;
  border-bottom: 4px solid black;
  align-items: flex-end;
`;

const LocationTitleContainer = styled.div`
  width: ${TIMELINE_WIDTH}px;
  position: sticky;
  z-index: 50;
  line-height: 1;
  left: 0;
  top: 0;
  height: 100%;
`;

const LocationTitle = styled.div`
  white-space: nowrap;
  width: fit-content;
  background-color: white;
  padding-top: 4px;
  //
  // width: ${TIMELINE_WIDTH}px;
  //
  // padding: 0.1rem 3rem;
  //
  // background-color: var(--color-dark-gray);
  //
  // font-size: 24px;
  // font-weight: 500;
  // color: var(--color-white);
`;

const LocationTitleInnerContainer = styled(LocationTitle)`
  transform: scaleX(0.7);
  transform-origin: top left;
  font-size: 24px
`;

const LocationRoomContainer = styled.div`
  height: 100%;
  width: ${TIMELINE_WIDTH}px;
  border-bottom: 1px solid black;
  position: relative;
  display: flex;
  align-items: flex-start;
  
  &::after {
    height: 100%;
  }
`;

const LocationRoomTitleContainer = styled.div`
  width: ${TIMELINE_WIDTH}px;
  position: sticky;
  z-index: 50;
  line-height: 1;
  left: 0;
  top: 0;
  height: 100%;
`;

const LocationRoomTitle = styled.div`
  white-space: nowrap;
  width: fit-content;
  background-color: white;
  padding-top: 4px;
  font-size: 24px;
`;

const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  padding: 4px 0;
`;
