import React from 'react'

import styles from '@/styles/pages/locations/map/Marker.module.css'

import GroundPlan from '@/components/pages/locations/map/ground_plan'

export default function ResponsiveMarker ({ location }) {
  const isMobile = false
  const useTextBox = true

  let marker

  if (useTextBox) {
    marker = <TextBoxMarker location={location} />
  } else if (isMobile) {
    marker = <GroundPlan id={location.id} type='marker' alt={location.name} useSimpleGroundPlan={true} />
  } else {
    marker = <GroundPlan id={location.id} type='marker' alt={location.name} />
  }

  return (
    <div className={styles.container}>
      {marker}
    </div>
  )
}

function TextBoxMarker ({ location }) {
  return <div id={`marker-${location.id}`} className={styles.textBoxContainer}>{location.name}</div>
}
