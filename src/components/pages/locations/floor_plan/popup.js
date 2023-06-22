import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import LocationsFloorPlan from "@/components/pages/locations/floor_plan/floor_plan";

export default function LocationsFloorPlanPopup() {
  const filter = useFilter()

  if (!('floor' in filter)) {
    return <></>
  }

  return (
    <LocationsFloorPlanPopupContainer>
      <LocationsFloorPlanColumn>
        <LocationsFloorPlan />
      </LocationsFloorPlanColumn>
      <LocationsFloorPlanEmptyColumn />
      <LocationsFloorPlanEmptyColumn />
    </LocationsFloorPlanPopupContainer>
  )
}

const LocationsFloorPlanEmptyColumn = styled.div`
  pointer-events: none;
`

const LocationsFloorPlanPopupContainer = styled.div`
  position: absolute;
  top: var(--locations-overlays-top);
  z-index: 4;

  display: grid;
  grid-template-columns: var(--layout-footer-grid-template-columns);

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  cursor: default;
  pointer-events: none;

  font-size: 16px;
`

const LocationsFloorPlanColumn = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`