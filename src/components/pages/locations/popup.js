import React from "react";
import styled from 'styled-components'

import { useFilter } from "@/providers/filter";
import Popup from "@/components/pages/locations/map/popup/popup";

export default function LocationsPopup({ locations }) {
  const filter = useFilter()

  if (!('location' in filter)) {
    return <></>
  }

  return (
    <LocationsPopupContainer>
      <LocationsPopupContentColumn>
        {Object.values(locations).map(location => <Popup location={location} />)}
      </LocationsPopupContentColumn>
      <LocationsPopupEmptyColumn />
      <LocationsPopupEmptyColumn />
    </LocationsPopupContainer>
  )
}

const LocationsPopupEmptyColumn = styled.div`
  pointer-events: none;
`

const LocationsPopupContainer = styled.div`
  position: absolute;
  top: var(--locations-map-popup-top);
  left: 1px;
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

const LocationsPopupContentColumn = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  
  pointer-events: all;
`
