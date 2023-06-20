import { ReactSVG } from "react-svg";
import React, { useEffect } from "react";
import useSWR from "swr";
import styled from 'styled-components'

import { fetcher, getUrl } from "@/utils/api/api";
import { useFilter, useFilterDispatch } from "@/providers/filter";

export default function LocationsFloorPlan() {
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const { data, error, isLoading } = useSWR(
    getUrl(filter.floor.id),
    fetcher
  );

  const handleSelectRoom = (e) => {
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        let rooms = document.querySelectorAll(`[data-production="${child.id}"]`);
        rooms.forEach(room => room.style.fill = '')
      }
    })
    const roomId = e.target.getAttribute('data-production')

    if (roomId) {
      e.target.style.fill = 'var(--color-pink)';
      dispatch(
        {
          type: 'select-room',
          room: filter.floor.children[roomId]
        })
    }
  }

  useEffect(() => {
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        const rooms = document.querySelectorAll(`[data-production="${child.id}"]`);
        if (rooms) {
          rooms.forEach(room => room.style.fill = '')
        }
      }
    })

    if ('room' in filter) {
      const rooms = document.querySelectorAll(`[data-production="${filter.room.id}"]`);
      if (rooms) {
        rooms.forEach(room => room.style.fill = 'var(--color-pink)')
      }
    }
  }, [filter])

  if (!data) {
    return <></>
  }

  return (
    <LocationsFloorPlanContainer onClick={handleSelectRoom}>
      <ReactSVG src={data.thumbnail_full_size}/>
    </LocationsFloorPlanContainer>
  )
}

const LocationsFloorPlanContainer = styled.div`
  height: var(--locations-ground-plan-height);
  min-height: var(--locations-ground-plan-height);
  max-height: var(--locations-ground-plan-height);

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  pointer-events: all;

  > div {
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      
      > svg {
        padding: 2rem;
        max-width: 100%;
        max-height: 100%;

        width: auto;
        height: auto;

        rect:hover {
          fill: var(--color-pink);
        }
      }
    }
  }
`