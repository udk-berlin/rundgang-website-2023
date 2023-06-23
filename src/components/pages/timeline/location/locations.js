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
        <TimelineLocationRoom room={{name: '1', id: 1}} roomIndex={0}/>
        <TimelineLocationRoom room={{name: '53', id: 2}} roomIndex={1}/>

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
