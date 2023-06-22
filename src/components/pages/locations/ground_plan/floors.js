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
      {Object.values(floors).sort(sortByName).map((floor, index) => <LocationsGroundPlanFloor key={index} floor={floor} />)}
      <LocationsGroundPlanFloorEmpty />
    </LocationsGroundPlanFloorsContainer>
  )
}

function LocationsGroundPlanFloor ({ key, floor }) {
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'select-floor',
        floor: floor
      })
  }

  return (
    <LocationsGroundPlanFloorContainer key={key} selected={('floor' in filter && filter.floor.id === floor.id)} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floor'}/>: {floor.name}
      </div>
    </LocationsGroundPlanFloorContainer>
  )
}

function LocationsGroundPlanFloorAll () {
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-floors'
      })
  }

  return (
    <LocationsGroundPlanFloorContainer key={-1} selected={!('floor' in filter)} onClick={handleClick}>
      <div>
        <FormattedMessage id={'floors.all'}/>
      </div>
    </LocationsGroundPlanFloorContainer>
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

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
`

const LocationsGroundPlanFloorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 0.2rem 0.4rem;

  border: calc(0.5 * var(--border-width)) solid var(--border-color);

  cursor: pointer;
  
  :hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }

  background-color: ${(props) => (props.selected ? 'var(--color-pink)' : 'var(--color-white)')};
  color: ${(props) => (props.selected ? 'var(--color-white)' : 'var(--color-black)')};
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
