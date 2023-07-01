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

  margin-bottom: ${({theme}) => theme.timeline.locations.marginBottom};
  margin-top: calc(${({theme}) => theme.timeline.days.height} + ${({theme}) => theme.timeline.hours.height} + ${({theme}) => theme.timeline.locations.marginTop} - ${({theme}) => theme.borderWidth});
`;
