import styled from "styled-components";

import TimelineLocation from "@/components/pages/timeline/location/location";
import { useFilter } from "@/providers/filter";

export default function TimelineLocations() {
  const filter = useFilter()

  return (
    <LocationsContainer>
      {Object.values(filter.filteredLocations).map(location => {
        return (
          <TimelineLocation location={location} />
        )
      })}
    </LocationsContainer>
  )
}

const LocationsContainer = styled.div`
  position: relative;
  z-index: 0;

  margin-bottom: 40px;
  margin-top: calc(var(--calender-days-height) + var(--calender-floor-room-project-height) + var(--calender-hours-margin-bottom));
`;
