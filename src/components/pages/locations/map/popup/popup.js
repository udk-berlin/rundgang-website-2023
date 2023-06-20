import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import { useFilter } from '@/providers/filter'
import PopupGroundPlan from "@/components/pages/locations/map/popup/ground_plan";
import PopupFloorPlan from "@/components/pages/locations/map/popup/floor_plan";
import PopupFloors from '@/components/pages/locations/map/popup/floors'
import PopupRooms from '@/components/pages/locations/map/popup/rooms'

export default function Popup ({ location }) {
  const filter = useFilter()

  const getDisplay = () => {
    return ('location' in filter && filter.location.id === location.id)
  }

  const [display, setDisplay] = useState(getDisplay())
  useEffect(() => {
    setDisplay(getDisplay())
  }, [filter])

  return (
    <PopupContainer id={`popup-${location.id}`} style={{display: display ? 'inline' : 'none'}}>
      <PopupGroundPlan location={location}/>
      <PopupFloorPlan />
      <PopupInfoContainer>
        <PopupFloors location={location} />
        <PopupRooms location={location} />
      </PopupInfoContainer>
    </PopupContainer>
  )
}

const PopupContainer = styled.div`
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

const PopupInfoContainer = styled.div`
  height: var(--locations-map-popup-infos-height);
  min-height: var(--locations-map-popup-infos-height);
  max-height: var(--locations-map-popup-infos-height);

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