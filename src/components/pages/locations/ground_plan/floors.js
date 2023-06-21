import React, { useRef, useEffect} from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import styles from '@/styles/pages/locations/map/popup/Floors.module.css'
import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/ground_plan/content";

export default function LocationsGroundPlanFloors ({ setLocationsGroundPlanFloorsContainerHeight }) {
  const ref = useRef();
  const filter = useFilter()
  const floors = getFloors(filter.location)

  useEffect(() => {
    setLocationsGroundPlanFloorsContainerHeight(ref.current.offsetHeight)
  }, [])

  return (
    <LocationsGroundPlanFloorsContainer ref={ref}>
      <LocationsGroundPlanFloorAll />
      {Object.values(floors).sort(sortByName).map((floor, index) => <PopupFloor key={index} floor={floor} />)}
      <LocationsGroundPlanFloorEmpty />
    </LocationsGroundPlanFloorsContainer>
  )
}

function PopupFloor ({ key, floor }) {
  const filter = useFilter()
  const dispatch = useFilterDispatch()
  const floorSelected = ('floor' in filter && filter.floor.id === floor.id)

  const handleClick = (e) => {
    dispatch(
      {
        type: 'select-floor',
        floor: floor
      })
  }

  return (
    <div key={key} className={[styles.floorContainer, floorSelected ? styles.floorSelected : ''].join(' ')} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floor'}/>: {floor.name}
      </div>
    </div>
  )
}

function LocationsGroundPlanFloorAll () {
  const filter = useFilter()
  const dispatch = useFilterDispatch()
  const floorSelected = !('floor' in filter)

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-floors'
      })
  }

  return (
    <div key={-1} className={[styles.floorContainer, floorSelected ? styles.floorSelected : ''].join(' ')} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floors.all'}/>
      </div>
    </div>
  )
}

function LocationsGroundPlanFloorEmpty () {
  return (
    <div key={-2} className={styles.emptyFloorContainer}>
      <div></div>
    </div>
  )
}

const LocationsGroundPlanFloorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  border: calc(0.5 * var(--border-width)) solid var(--border-color);
  background: var(--color-white);
`

function getFloors (location) {
  const floors = {}

  Object.values(location.children).forEach(child => {
    if (child.template === 'location-level') {
      floors[child.id] = child
    }
  })

  return floors
}
