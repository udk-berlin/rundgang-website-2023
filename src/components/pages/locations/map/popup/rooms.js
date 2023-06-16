import React from 'react'
import { FormattedMessage } from 'react-intl'

import styles from '@/styles/pages/locations/map/popup/Rooms.module.css'
import { useLocation, useLocationDispatch } from '@/providers/location'

export default function PopupFloors ({ floor }) {
  const rooms = getRooms(floor)

  return (
    <div className={styles.roomsContainer}>
      <PopupRoomsAll />
      {Object.values(rooms).map((room, index) => <PopupRoom key={index} room={room} />)}
    </div>
  )
}

function PopupRoom ({ key, room }) {
  const locationFilter = useLocation()
  const dispatch = useLocationDispatch()
  const roomSelected = ('room' in locationFilter && locationFilter.room.id === room.id)

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

function PopupRoomsAll () {
  const locationFilter = useLocation()
  const dispatch = useLocationDispatch()
  const roomSelected = !('room' in locationFilter)

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

function getRooms (floor) {
  const rooms = {}

  Object.values(floor.children).forEach(child => {
    if (child.template === 'location-room') {
      rooms[child.id] = child
    }
  })

  return rooms
}
