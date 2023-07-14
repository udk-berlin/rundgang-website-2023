import React, {useState} from "react";
import styled from 'styled-components'

import LocationsGroundPlan from "@/components/pages/locations/ground_plan/image";
import LocationsGroundPlanFloors from '@/components/pages/locations/ground_plan/floors'
import LocationsGroundPlanRooms from '@/components/pages/locations/ground_plan/rooms'
import { useFilter } from "@/providers/filter";

export default function LocationsGroundPlanContent () {
  const [locationsGroundPlanFloorsContainerHeight, setLocationsGroundPlanFloorsContainerHeight] = useState()
  const filter = useFilter()

  return (
    <LocationsGroundPlanContentContainer>
      <LocationsGroundPlan />
      <LocationsGroundPlanInfoContainer>
        <LocationsGroundPlanLocationContainer>
          <LocationsGroundPlanLocationNameContainer>
            {filter.location.name}
          </LocationsGroundPlanLocationNameContainer>
        </LocationsGroundPlanLocationContainer>
        <LocationsGroundPlanFloors setLocationsGroundPlanFloorsContainerHeight={setLocationsGroundPlanFloorsContainerHeight}/>
        <LocationsGroundPlanRooms locationsGroundPlanFloorsContainerHeight={locationsGroundPlanFloorsContainerHeight}/>
      </LocationsGroundPlanInfoContainer>
    </LocationsGroundPlanContentContainer>
  )
}

const LocationsGroundPlanLocationNameContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;

  padding: calc(0.2rem + 1px) 0.4rem;
  
  background-color: var(--color-pink);
  color: var(--color-white);
`

const LocationsGroundPlanLocationContainer = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  cursor: default;

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  
  background: white;
  border-top: ${({ theme })=> theme.border};
  border-right: ${({ theme })=> theme.border};
`

const LocationsGroundPlanContentContainer = styled.div`
  position: relative;

  width: calc(100% + var(--border-width));
  min-width: calc(100% + var(--border-width));
  max-width: calc(100% + var(--border-width));

  height: ${({ theme })=> theme.groundPlan.content.height};
  min-height: ${({ theme })=> theme.groundPlan.content.height};
  max-height: ${({ theme })=> theme.groundPlan.content.height};

  cursor: default;
  
  font-size: ${({ theme })=> theme.fontSizes.small};
`

const LocationsGroundPlanInfoContainer = styled.div`
  height: ${({ theme })=> theme.groundPlan.info.height};
  min-height: ${({ theme })=> theme.groundPlan.info.height};
  max-height: ${({ theme })=> theme.groundPlan.info.height};

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  overflow: ${({ theme })=> theme.groundPlan.content.overflow};
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
