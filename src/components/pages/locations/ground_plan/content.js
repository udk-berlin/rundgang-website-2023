import React from "react";
import styled from 'styled-components'

import LocationsGroundPlan from "@/components/pages/locations/ground_plan/ground_plan";
import LocationsGroundPlanFloors from '@/components/pages/locations/ground_plan/floors'
import LocationsGroundPlanRooms from '@/components/pages/locations/ground_plan/rooms'

export default function LocationsGroundPlanContent () {
  return (
    <LocationsGroundPlanContentContainer>
      <LocationsGroundPlan />
      <LocationsGroundPlanInfoContainer>
        <LocationsGroundPlanFloors />
        <LocationsGroundPlanRooms />
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
  
  font-size: 16px;
`

const LocationsGroundPlanInfoContainer = styled.div`
  height: var(--locations-ground-plan-infos-height);
  min-height: var(--locations-ground-plan-infos-height);
  max-height: var(--locations-ground-plan-infos-height);

  overflow: hidden;
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