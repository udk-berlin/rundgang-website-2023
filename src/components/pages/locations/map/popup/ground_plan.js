import React from "react";
import styled from 'styled-components'

import GroundPlan from '@/components/pages/locations/map/ground_plan'

export default function PopupGroundPlan({ location }) {
  const isMobile = false
  let groundPlan

  if (isMobile) {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} />
  }

  return (
    <GroundPlanContainer>
      <div>{groundPlan}</div>
    </GroundPlanContainer>
  )
}

const GroundPlanContainer = styled.div`
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