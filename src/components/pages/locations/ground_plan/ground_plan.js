import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import LocationsGroundPlanContent from "@/components/pages/locations/ground_plan/content";

export default function LocationsGroundPlan() {
  const filter = useFilter()

  if (!(filter.location)) {
    return <></>
  }

  return (
    <GroundPlanContainer>
      <ContentColumn>
        <LocationsGroundPlanContent />
      </ContentColumn>
      <EmptyColumn />
      <EmptyColumn />
    </GroundPlanContainer>
  )
}

const EmptyColumn = styled.div`
  pointer-events: none;
`

const GroundPlanContainer = styled.div`
  position: ${({ theme })=> theme.locations.groundPlan.position};
  top: ${({ theme })=> theme.locations.groundPlan.top};
  z-index: 3;

  display: grid;
  grid-template-columns: ${({ theme })=> theme.locations.groundPlan.gridTemplateColumns};

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: ${({ theme })=> theme.locations.groundPlan.height};
  min-height: ${({ theme })=> theme.locations.groundPlan.height};
  max-height: ${({ theme })=> theme.locations.groundPlan.height};

  cursor: default;
  pointer-events: none;

  font-size: 16px;
`

const ContentColumn = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  
  pointer-events: all;
`
