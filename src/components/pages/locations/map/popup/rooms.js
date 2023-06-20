import React from 'react'
import { FormattedMessage } from 'react-intl'

import styles from '@/styles/pages/locations/map/popup/Rooms.module.css'
import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/map/popup/popup";

export default function PopupFloors ({ location }) {
  const filter = useFilter()

  if (!filter.floor || filter.location.id !== location.id) {
    return <></>
  }

  const rooms = getRooms(filter.floor)

  return (
    <>
      <div className={styles.roomsContainer}>
        <PopupRoomsAll />
        {
          Object.values(rooms)
            .sort(sortByName).map((room, index) => <PopupRoom key={index} room={room} />)
        }
      </div>
    </>
  )
}

function PopupRoom ({ key, room }) {
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

function PopupRoomsAll () {
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
