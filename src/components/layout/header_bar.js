import React, { useState } from 'react'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

import styles from '@/styles/layout/HeaderBar.module.css'

export default function HeaderBar () {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Link href="/map">
          <Hover
            path_passive="/assets/svg/layout/map_passive.svg"
            path_active="/assets/svg/layout/map_active.svg"
          />
        </Link>
      </div>
      <div className={styles.date}>
        <Link href="/calendar">21. – 23.07.2023</Link>
      </div>
      <div className={styles.subgrid}>
        <div className={styles.saved}>
          <Link href="/">
            <Hover
              path_passive="/assets/svg/layout/shop_passive_1.svg"
              path_active="/assets/svg/layout/shop_active_1.svg"
            />
          </Link>
        </div>
        <div className={styles.language}>DE/EN</div>
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
