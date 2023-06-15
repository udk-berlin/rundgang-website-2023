import React from 'react'

import styles from '@/styles/pages/map/Popup.module.css'

export default function Popup ({ location }) {
  return (
        <div className={styles.container}>{location.name}</div>
  )
}
