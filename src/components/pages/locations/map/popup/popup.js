import React from 'react'

import styles from '@/styles/pages/locations/map/popup/Popup.module.css'

import { useLocation } from '@/providers/location'
import GroundPlan from '@/components/pages/locations/map/ground_plan'
import PopupFloors from '@/components/pages/locations/map/popup/floors'
import PopupRooms from '@/components/pages/locations/map/popup/rooms'

export default function Popup ({ location }) {
  const isMobile = false
  let groundPlan

  if (isMobile) {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    groundPlan = <GroundPlan id={location.id} type='popup' alt={location.name} id={location.id} />
  }

  const locationFilter = useLocation()
  console.log(locationFilter)

  let rooms = <></>

  if (locationFilter.floor) {
    rooms = <PopupRooms floor={locationFilter.floor} />
  }

  return (
    <div id={`popup-${location.id}`} className={styles.container} >
      <div className={styles.groundPlanContainer}>
        <div>{groundPlan}</div>
      </div>
      <PopupInfos>
        <PopupFloors location={location} />
        {rooms}
      </PopupInfos>
    </div>
  )
}

function PopupInfos ({ children }) {
  return (
    <div className={styles.infosContainer}>{children}</div>
  )
}
