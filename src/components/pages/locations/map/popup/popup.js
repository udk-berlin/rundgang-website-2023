import React from "react";
import useSWR from "swr";
import { ReactSVG } from 'react-svg'

import styles from '@/styles/pages/locations/map/popup/Popup.module.css'

import GroundPlan from '@/components/pages/locations/map/ground_plan'
import PopupFloors from '@/components/pages/locations/map/popup/floors'
import PopupRooms from '@/components/pages/locations/map/popup/rooms'

import { useLocation, useLocationDispatch } from '@/providers/location'
import { getUrl, fetcher } from "@/utils/api/api";


export default function Popup ({ location }) {
  const isMobile = false
  let groundPlan
  const locationFilter = useLocation()

  if (isMobile) {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} id={location.id} />
  }

  let floorData;
  if ('floor' in locationFilter) {
    const { data, error, isLoading } = useSWR(
      getUrl(locationFilter.floor.id),
      fetcher
    );

    floorData = data;
  }

  let roomData;
  if ('room' in locationFilter) {
    const { data, error, isLoading } = useSWR(
      getUrl(locationFilter.room.id),
      fetcher
    );

    roomData = data;
  }

  const handleSelectRoom = (e) => {
    // let roomRect = document.querySelectorAll(
    //   `[data-id="udk-berlin|4008|2|R-202"]`,
    // )[0];
    //
    // console.log(roomRect)
    // roomRect.style.fill = "#E2FF5D";
    // if (roomRect) {
      // let newname = raumnamen.find(n => n.id == data.id)?.newname;
      // let showname = roomname(data, newname);
      // if (showname) {
      //   roomRect.style.fill = "#E2FF5D";
      //   uiStore.setSelectedRoom({ ...data, showname });
      //   uiStore.setFloorLevel(uiStore.floorLevel);
      // }
    // }
  }

  let floorPlan;
  if (floorData) {
    floorPlan =  <ReactSVG className={styles.selectedRoom} src={floorData.thumbnail_full_size} onClick={e => handleSelectRoom(e)} />
  }

  return (
    <>
      <div id={`popup-${location.id}`} className={styles.container}>
        <div className={styles.floorPlanContainer}>
          {floorPlan}
        </div>
        <div className={styles.groundPlanContainer}>
          <div>{groundPlan}</div>
        </div>
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
