import React from "react";
import useSWR from "swr";

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

  let floorPlan = 'test';
  if (floorData) {
    floorPlan = <img src={floorData.thumbnail_full_size}/>
  }

  return (
    <>
      <div className={styles.floorPlanContainer}>
        <div>{floorPlan}</div>
      </div>
      <div id={`popup-${location.id}`} className={styles.container}>
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
