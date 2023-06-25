import styled from "styled-components";

import TimelineLocation from "@/components/pages/timeline/location";

export default function TimelineLocations({ locations, projects }) {
  return (
    <>
      {locations.slice(0,1).map(location => {
        return (
          <TimelineLocationsContainer key={location.id}>
            <TimelineLocation location={location} projects={projects} />
          </TimelineLocationsContainer>
        )
      })}
    </>
  )
}

const TimelineLocationsContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
