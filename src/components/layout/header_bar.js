import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import styles from '@/styles/layout/HeaderBar.module.css'
import { LocalizedLink, SwitchLocalizationLink } from "@/components/localization/links";

export default function HeaderBar () {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <LocalizedLink href="/map">
          <Hover
            path_passive="/assets/svg/layout/map_passive.svg"
            path_active="/assets/svg/layout/map_active.svg"
          />
        </LocalizedLink>
      </div>
      <div className={styles.date}>
        <LocalizedLink href="/calendar">21. – 23.07.2023</LocalizedLink>
      </div>
      <div className={styles.subgrid}>
        <div>
          <LocalizedLink href="/">
            <Hover
              path_passive="/assets/svg/layout/shop_passive_1.svg"
              path_active="/assets/svg/layout/shop_active_1.svg"
            />
          </LocalizedLink>
        </div>
        <div className={styles.localization}><SwitchLocalizationLink /></div>
      </div>
    </div>
  )
}

export function Hover ({ path_passive, path_active }) {
  const [isShown, setIsShown] = useState(false)
  return (
    <div
      style={{ width: '50px' }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && <ReactSVG src={path_active} />}
      {!isShown && <ReactSVG src={path_passive} />}
    </div>
  )
}
