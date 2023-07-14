import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { useFilter, useFilterDispatch } from '@/providers/filter'
import { sortByName } from "@/components/pages/locations/ground_plan/content";
import { useData } from "@/providers/data/data";

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
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'filter-room',
        room: room,
        projects: projects,
        locations: locations
      })
  }

  const roomName = roomNameMapperToId(room.name)

  return (
    <LocationsGroundPlanRoomContainer key={key} selected={(filter.room && filter.room.id === room.id)} onClick={handleClick}>
      <div>
        {roomName.id ? <span><FormattedMessage id={roomName.id}/>: </span> : <></>}
        {roomName.name}
      </div>
    </LocationsGroundPlanRoomContainer>
  )
}

function LocationsGroundPlanRoomsAll () {
  const { projects, locations } = useData()
  const dispatch = useFilterDispatch()
  const filter = useFilter()

  const handleClick = (e) => {
    dispatch(
      {
        type: 'all-rooms',
        projects: projects,
        locations: locations
      })
  }

  return (
    <LocationsGroundPlanRoomContainer key={-1} onClick={handleClick} selected={!filter.room}>
      <div>
        <FormattedMessage id={'rooms.all'}/>
      </div>
    </LocationsGroundPlanRoomContainer>
  )
}

export function roomNameMapperToId(name) {
  if (name.startsWith('R-') || name.startsWith('RE-') || name.startsWith('R ') || name.startsWith('RE ')) {
    return {id: 'room', name: name.replace('RE-', '').replace('R-', '').replace('RE ', '').replace('R ', '')}
  } else if (name.startsWith('V-') || name.startsWith('VF-') || name.startsWith('V ') || name.startsWith('VF ')) {
    return {id: 'corridor', name: name.replace('VF-', '').replace('V-', '').replace('VF ', '').replace('V ', '')}
  } else if (name.startsWith('TH-') || name.startsWith('TPH-') || name.startsWith('TH ') || name.startsWith('TPH ')) {
    return {id: 'stairs', name: name.replace('TH-', '').replace('TPH-', '').replace('TH ', '').replace('TPH ', '')}
  } else if (name.startsWith('TF-') || name.startsWith('TF ')) {
    return {id: 'technic', name: name.replace('TF-', '').replace('TF ', '')}
  } else if (name === 'Außenvitrine') {
    return {id: null, name: name}
  } else {
    return {id: 'room', name: name}
  }
}

const LocationsGroundPlanRoomsContainer = styled.div`
  max-height: ${({ theme, locationsGroundPlanFloorsContainerHeight }) => `calc(${theme.map.height} - var(--locations-ground-plan-height) - ${locationsGroundPlanFloorsContainerHeight + 'px'} + var(--border-width))`};
  overflow: ${({ theme })=> theme.groundPlan.rooms.overflow};
  background: var(--color-white);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
}
`

const LocationsGroundPlanRoomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 0.2rem 0.4rem;

  border-top: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-bottom: calc(0.5 * var(--border-width)) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);

  cursor: pointer;

  :nth-child(1) {
    border-top: 0 !important;
  }

  :nth-last-child(1) {
    border-bottom: var(--border-width) solid var(--border-color);
  }

  :hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }

  background-color: ${({ selected }) => selected ? 'var(--color-pink)' : 'var(--color-white)'};
  color: ${({ selected }) => selected ? 'var(--color-white)' : 'var(--color-black)'};
`

function getRooms (floor) {
  const rooms = {}

  Object.values(floor.children).forEach(child => {
    if (child.template === 'location-room') {
      rooms[child.id] = child
    }
  })

  return rooms
}
