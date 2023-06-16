import React from 'react'
import styled from 'styled-components'

const GROUND_PLAN_FOLDER_PATH = '/assets/svg/map/ground_plan/'
const SIMPLE_GROUND_PLAN_FILENAME = 'simple.svg'

const ID_TO_GROUNDPLAN_FILENAME_MAPPER = {
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

const TYPE_TO_SIZE_MAPPER = {
  marker: {
    simple: 30,
    default: 100
  },
  popup: {
    simple: 30,
    default: 500
  }
}

function getSimpleGroundPlanSrc (type) {
  return `${GROUND_PLAN_FOLDER_PATH}/${type}/${SIMPLE_GROUND_PLAN_FILENAME}`
}

function getGroundPlanSrc (id, type) {
  if (id in ID_TO_GROUNDPLAN_FILENAME_MAPPER) {
    return `${GROUND_PLAN_FOLDER_PATH}/${type}/${ID_TO_GROUNDPLAN_FILENAME_MAPPER[id]}.svg`
  } else {
    return getSimpleGroundPlanSrc(type)
  }
}

export default function GroundPlan ({ id, type, alt, useSimpleGroundPlan = false }) {
  if (!useSimpleGroundPlan && !(id in ID_TO_GROUNDPLAN_FILENAME_MAPPER)) {
    useSimpleGroundPlan = true
  }

  return (
    <StyledGroundPlan
      id={id}
      alt={alt}
      src={useSimpleGroundPlan ? getSimpleGroundPlanSrc(type) : getGroundPlanSrc(id, type)}
      size={TYPE_TO_SIZE_MAPPER[type][useSimpleGroundPlan ? 'simple' : 'default']}
      loading="lazy"
    />
  )
}

const StyledGroundPlan = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`
