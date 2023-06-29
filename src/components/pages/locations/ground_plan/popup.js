import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import LocationsGroundPlanContent from "@/components/pages/locations/ground_plan/content";

export default function LocationsGroundPlanPopup() {
  const filter = useFilter()

  if (!(filter.location)) {
    return <></>
  }

  return (
    <LocationsGroundPlanPopupContainer>
      <LocationsGroundPlanContentColumn>
        <LocationsGroundPlanContent />
      </LocationsGroundPlanContentColumn>
      <LocationsGroundPlanEmptyColumn />
      <LocationsGroundPlanEmptyColumn />
    </LocationsGroundPlanPopupContainer>
  )
}

const LocationsGroundPlanEmptyColumn = styled.div`
  pointer-events: none;
`

const LocationsGroundPlanPopupContainer = styled.div`
  position: absolute;
  top: var(--locations-overlays-top);
  z-index: 3;

  display: grid;
  grid-template-columns: var(--layout-footer-grid-template-columns);

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: var(--locations-map-height);
  min-height: var(--locations-map-height);
  max-height: var(--locations-map-height);

  cursor: default;
  pointer-events: none;

  font-size: 16px;
`

const LocationsGroundPlanContentColumn = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  
  pointer-events: all;
`
