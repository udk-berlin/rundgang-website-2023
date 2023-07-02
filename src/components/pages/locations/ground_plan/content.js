import React, {useState} from "react";
import styled from 'styled-components'

import LocationsGroundPlan from "@/components/pages/locations/ground_plan/image";
import LocationsGroundPlanFloors from '@/components/pages/locations/ground_plan/floors'
import LocationsGroundPlanRooms from '@/components/pages/locations/ground_plan/rooms'

export default function LocationsGroundPlanContent () {
  const [locationsGroundPlanFloorsContainerHeight, setLocationsGroundPlanFloorsContainerHeight] = useState()

  return (
    <LocationsGroundPlanContentContainer>
      <LocationsGroundPlan />
      <LocationsGroundPlanInfoContainer>
        <LocationsGroundPlanFloors setLocationsGroundPlanFloorsContainerHeight={setLocationsGroundPlanFloorsContainerHeight}/>
        <LocationsGroundPlanRooms locationsGroundPlanFloorsContainerHeight={locationsGroundPlanFloorsContainerHeight}/>
      </LocationsGroundPlanInfoContainer>
    </LocationsGroundPlanContentContainer>
  )
}

const LocationsGroundPlanContentContainer = styled.div`
  position: relative;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  height: 100%;
  min-height: 100%;
  max-height: 100%;

  cursor: default;
  
  font-size: ${({ theme })=> theme.fontSizes.small};
`

const LocationsGroundPlanInfoContainer = styled.div`
  height: ${({ theme })=> theme.locations.groundPlan.content.height};
  min-height: ${({ theme })=> theme.locations.groundPlan.content.height};
  max-height: ${({ theme })=> theme.locations.groundPlan.content.height};

  overflow: ${({ theme })=> theme.locations.groundPlan.content.overflow};
`

export function sortByName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
