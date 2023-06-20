import React from "react";
import styled from 'styled-components'

import GroundPlan from '@/components/pages/locations/map/ground_plan'
import { useFilter } from "@/providers/filter";

export default function LocationsGroundPlan() {
  const filter = useFilter()
  const isMobile = false
  let groundPlan

  if (isMobile) {
    groundPlan = <GroundPlan id={filter.location.id} type='popup' alt={filter.location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={filter.location.id} type='popup' alt={filter.location.name} />
  }

  return (
    <LocationsGroundPlanContainer>
      <div>{groundPlan}</div>
    </LocationsGroundPlanContainer>
  )
}

const LocationsGroundPlanContainer = styled.div`
  height: var(--locations-map-popup-ground-plan-height);
  min-height: var(--locations-map-popup-ground-plan-height);
  max-height: var(--locations-map-popup-ground-plan-height);

  background:  var(--color-transparent-black);

  border-right: var(--border-width) solid var(--border-color);

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      padding: 2rem;
      max-width: 100%;
      max-height: 100%;

      width: auto;
      height: auto;
    }
  }
`