import React from "react";
import useSWR from "swr";
import { ReactSVG } from 'react-svg'

import styles from '@/styles/pages/locations/map/popup/Popup.module.css'

import GroundPlan from '@/components/pages/locations/map/ground_plan'
import PopupFloors from '@/components/pages/locations/map/popup/floors'
import PopupRooms from '@/components/pages/locations/map/popup/rooms'

import { useFilter, useFilterDispatch } from '@/providers/filter'
import { getUrl, fetcher } from "@/utils/api/api";

export default function Popup ({ location }) {
  const isMobile = false
  let groundPlan
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  if (isMobile) {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} />
  }

  let floorData;
  if ('floor' in filter) {
    const { data, error, isLoading } = useSWR(
      getUrl(filter.floor.id),
      fetcher
    );

    floorData = data;
  }

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

  let floorPlan;
  if (floorData) {
    floorPlan =  (
      <div className={styles.floorPlanContainer} onClick={handleSelectRoom}>
        <ReactSVG src={floorData.thumbnail_full_size}/>
      </div>
    )
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        let rooms = document.querySelectorAll(`[data-production="${child.id}"]`);
        rooms.forEach(room => room.style.fill = '')
      }
    })

    if ('room' in filter) {
      let rooms = document.querySelectorAll(`[data-production="${locationFilter.room.id}"]`);
      rooms.forEach(room => room.style.fill = 'var(--color-pink)')
    }
  }

  return (
    <>
      <div id={`popup-${location.id}`} className={styles.container}>
        <div className={styles.groundPlanContainer}>
          <div>{groundPlan}</div>
        </div>
        {floorPlan}
        <PopupInfos>
          <PopupFloors location={location} />
          <PopupRooms location={location} />
        </PopupInfos>
      </div>
    </>
  )
}

function PopupInfos ({ children }) {
  return (
    <div className={styles.infosContainer}>{children}</div>
  )
}

export function sortByName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
