import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import styles from '@/styles/layout/header/Bar.module.css'
import { LocalizedLink, SwitchLocalizationLink } from "@/components/localization/links";
import { TimelineLink, LocationsLink } from "@/components/localization/links";

export default function HeaderBar () {
  return (
    <div className={styles.container}>
      <div className={styles.locations}>
        <LocationsLink>
          <SVGHover
            pathPassive="/assets/svg/layout/map_passive.svg"
            pathActive="/assets/svg/layout/map_active.svg"
          />
        </LocationsLink>
      </div>
      <div className={styles.timeline}>
        <TimelineLink>21. – 23.07.2023</TimelineLink>
      </div>
      <div className={styles.cart}>
        <LocalizedLink href="/">
          <SVGHover
            pathPassive="/assets/svg/layout/shop_passive_1.svg"
            pathActive="/assets/svg/layout/shop_active_1.svg"
          />
        </LocalizedLink>
      </div>
      <div className={styles.localization}><SwitchLocalizationLink /></div>
    </div>
  )
}

export function SVGHover ({ pathPassive, pathActive }) {
  const [isShown, setIsShown] = useState(false)
  return (
    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {isShown && <ReactSVG className={styles.svg} src={pathActive} />}
      {!isShown && <ReactSVG className={styles.svg} src={pathPassive} />}
    </div>
  )
}
