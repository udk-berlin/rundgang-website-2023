import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import styles from '@/styles/pages/locations/map/popup/Floors.module.css'
import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/map/popup/popup";

export default function PopupFloors ({ location }) {
  const filter = useFilter()

  if (!filter.location || filter.location.id !== location.id) {
    return <></>
  }

  const floors = getFloors(location)

  return (
    <PopupFloorsContainer>
      <PopupFloorAll />
      {Object.values(floors).sort(sortByName).map((floor, index) => <PopupFloor key={index} floor={floor} />)}
      <PopupFloorEmpty />
    </PopupFloorsContainer>
  )
}

const PopupFloorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  border: calc(0.5 * var(--border-width)) solid var(--border-color);
  background: var(--color-white);
`

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

function PopupFloorAll () {
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

function PopupFloorEmpty () {
  return (
    <div key={-2} className={styles.emptyFloorContainer}>
      <div></div>
    </div>
  )
}

function getFloors (location) {
  const floors = {}

  Object.values(location.children).forEach(child => {
    if (child.template === 'location-level') {
      floors[child.id] = child
    }
  })

  return floors
}
