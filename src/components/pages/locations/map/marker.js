import React from 'react'
import styled from 'styled-components'

import styles from '@/styles/pages/locations/map/Marker.module.css'

const MARKER_IMAGE_FOLDER_PATH = '/assets/svg/map/marker/'
const SIMPLE_MARKER_IMAGE_SRC = `${MARKER_IMAGE_FOLDER_PATH}/simple.svg`

const StyledMarkerImage = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

const idToOutlineMarkerImageIdMapper = {
  '!uAswzmPHWtAVmjhIYx:content.udk-berlin.de': '001',
  '!hjTkjNaIDkzxNWQZTR:content.udk-berlin.de': '002',
  '!XaBVrlwEHUifKOmMPa:content.udk-berlin.de': '003',
  '!aLyedVYnhynRwlhXUm:content.udk-berlin.de': '004',
  '!amwvMUTwucDiRylpJQ:content.udk-berlin.de': '005',
  '!LiVonEpyzckeIAyOIb:content.udk-berlin.de': '006',
  '!cUpdRzxCGmLkwfrUeq:content.udk-berlin.de': '007',
  '!FYglBKPJHZGUNIYcBt:content.udk-berlin.de': '008',
  '!fwsuOeorRCZtTqwukc:content.udk-berlin.de': '009',
  '!ozXLGbrpCVNrRScjQJ:content.udk-berlin.de': '010',
  '!nOMmizEAkvzoapuqCK:content.udk-berlin.de': '011',
  '!FqPOhaHHAjYeliMfOU:content.udk-berlin.de': '012',
  '!jocCvZKGntdCmvmmUG:content.udk-berlin.de': '013'
}

const idToOutlineMarkerImageSrcMapper = (id) => {
  if (id in idToOutlineMarkerImageIdMapper) {
    return `${MARKER_IMAGE_FOLDER_PATH}/${idToOutlineMarkerImageIdMapper[id]}.svg`
  } else {
    return SIMPLE_MARKER_IMAGE_SRC
  }
}

const markerTypeToMarkerImageSizeMapper = {
  simple: 30,
  outline: 100
}

export default function ResponsiveMarker ({ location }) {
  const isMobile = false
  const useTextBox = true

  let marker =  <OutlineMarker location={location} />

  if (useTextBox) {
    marker = <TextBoxMarker location={location} />
  } else if (isMobile || !(location.id in idToOutlineMarkerImageIdMapper)) {
    marker = <SimpleMarker location={location} />
  }

  return (
    <div className={styles.container}>
      {marker}
    </div>
  )
}

function OutlineMarker ({ location }) {
  return <Marker location={location} size={markerTypeToMarkerImageSizeMapper.outline} asOutline={true} />
}

function SimpleMarker ({ location }) {
  return <Marker location={location} size={markerTypeToMarkerImageSizeMapper.simple} />
}

function TextBoxMarker ({ location }) {
  return <div id={`marker-${location.id}`} className={styles.textBoxContainer}>{location.name}</div>
}

function Marker ({ location, size, asOutline = false }) {
  return (
    <StyledMarkerImage
      id={`marker-${location.id}`}
      alt={location.name}
      src={asOutline ? idToOutlineMarkerImageSrcMapper(location.id) : SIMPLE_MARKER_IMAGE_SRC}
      size={size}
      loading="lazy"
    />
  )
}
