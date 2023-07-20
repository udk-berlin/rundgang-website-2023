import React, {useState} from "react";
import styled from 'styled-components'

import LocationsGroundPlan from "@/components/pages/locations/mobile/ground_plan/image";
import LocationsGroundPlanFloors from '@/components/pages/locations/mobile/ground_plan/floors'
import LocationsGroundPlanRooms from '@/components/pages/locations/mobile/ground_plan/rooms'
import { useFilter } from "@/providers/filter";

export default function LocationsMobileGroundPlanContent () {
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

const LocationsGroundPlanContentContainer = styled.div`
  position: relative;
  cursor: default;
  font-size: ${({ theme })=> theme.fontSizes.small};
`

const LocationsGroundPlanInfoContainer = styled.div`
`

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
  cursor: default;

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  
  background: white;
  border-top: ${({ theme })=> theme.border};
`
