import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import styles from '@/styles/pages/locations/map/popup/Rooms.module.css'
import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/ground_plan/content";

export default function LocationsGroundPlanRooms ({ locationsGroundPlanFloorsContainerHeight }) {
  const filter = useFilter()

  if (!filter.floor) {
    return <></>
  }

  const rooms = getRooms(filter.floor)
  return (
    <LocationsGroundPlanRoomsContainer locationsGroundPlanFloorsContainerHeight={locationsGroundPlanFloorsContainerHeight}>
      <LocationsGroundPlanRoomsAll />
      {
        Object.values(rooms)
          .sort(sortByName).map((room, index) => <LocationsGroundPlanRoom key={index} room={room} />)
      }
    </LocationsGroundPlanRoomsContainer>
  )
}

function LocationsGroundPlanRoom ({ key, room }) {
  const filter = useFilter()
  const dispatch = useFilterDispatch()
  const roomSelected = ('room' in filter && filter.room.id === room.id)

  const handleClick = (e) => {
    dispatch(
      {
        type: 'select-room',
        room: room
      })
  }

  return (
    <div key={key} className={[styles.roomContainer, roomSelected ? styles.roomSelected : ''].join(' ')}
         onClick={handleClick}>
      <div>
        <FormattedMessage id={'room'}/>: {room.name}
      </div>
    </div>
  )
}

function LocationsGroundPlanRoomsAll () {
  const filter = useFilter()
  const dispatch = useFilterDispatch()
  const roomSelected = !('room' in filter)

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-rooms'
      })
  }

  return (
    <div key={-1} className={[styles.roomContainer, roomSelected ? styles.roomSelected : ''].join(' ')} onClick={handleClick}>
      <div>
        <FormattedMessage id={'rooms.all'}/>
      </div>
    </div>
  )
}

const LocationsGroundPlanRoomsContainer = styled.div`
  max-height: ${(props) => `calc(var(--locations-map-height) - var(--locations-ground-plan-height) - ${props.locationsGroundPlanFloorsContainerHeight + 'px'} + var(--border-width))`};
  overflow: scroll;
  background: var(--color-white);
`

function getRooms (floor) {
  const rooms = {}

  Object.values(floor.children).forEach(child => {
    if (child.template === 'location-room') {
      console.log(child.children)
      rooms[child.id] = child
    }
  })

  return rooms
}
