import React from 'react'
import styled from 'styled-components'

import GroundPlan from '@/components/pages/locations/map/ground_plan'

export default function ResponsiveMarker ({ location, scale = null, useTextBox = false}) {
  let marker

  if (useTextBox) {
    marker = <TextBoxContainer id={`marker-${location.id}`} selected={false}>{location.name}</TextBoxContainer>
  } else {
    marker = <GroundPlanMarker location={location} type='marker' scale={scale} />
  }

  return (
    <>
      {marker}
    </>
  )
}

function GroundPlanMarker ({ location, scale = null }) {
  const isMobile = false
  let marker

  if (isMobile) {
    marker = <GroundPlan id={location.id} type='marker' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    marker = <GroundPlan id={location.id} type='marker' alt={location.name} scale={scale}/>
  }

  return (
    <GroundPlanContainer id={`marker-${location.id}`} selected={false}>
      {marker}
    </GroundPlanContainer>
  )
}

const GroundPlanContainer = styled.div`
  cursor: pointer;
  filter: ${({ selected }) => selected ? 'drop-shadow(var(--color-green) 0px 0px 1px)' :  ''};

  > img:hover {
    filter: drop-shadow(var(--color-green) 0px 0px 1px);
  }
`

const TextBoxContainer = styled.div`
  cursor: pointer;
  background: ${({ selected }) => selected ? 'var(--color-pink)' :  'var(--color-dark-gray)'};
  color: var(--color-white);
  padding: var(--locations-map-marker-text-box-padding);

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`