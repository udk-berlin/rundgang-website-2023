import React from 'react'
import { FormattedMessage } from 'react-intl'

import styles from '@/styles/pages/locations/map/popup/Floors.module.css'
import { useLocation, useLocationDispatch } from '@/providers/location'

export default function PopupFloors ({ location }) {
  const floors = getFloors(location)

  return (
    <div className={styles.floorsContainer}>
      <PopupFloorAll />
      {Object.values(floors).map((floor, index) => <PopupFloor key={index} floor={floor} />)}
      <PopupFloorEmpty />
    </div>
  )
}

function PopupFloor ({ key, floor }) {
  const locationFilter = useLocation()
  const dispatch = useLocationDispatch()
  const floorSelected = ('floor' in locationFilter && locationFilter.floor.id === floor.id)

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
  const locationFilter = useLocation()
  const dispatch = useLocationDispatch()
  const floorSelected = !('floor' in locationFilter)

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
