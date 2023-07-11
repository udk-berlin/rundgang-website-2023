import React from 'react'
import styled from 'styled-components'

const GROUND_PLAN_FOLDER_PATH = '/assets/svg/map/ground_plan/'
const SIMPLE_GROUND_PLAN_FILENAME = 'simple.svg'

const ID_TO_GROUNDPLAN_FILENAME_MAPPER = {
  '!PsyURUpKAbSPistHpQ:content.udk-berlin.de': '001',
  //'!hjTkjNaIDkzxNWQZTR:content.udk-berlin.de': '002',
  '!RuJBwEwOQcFrQabJnn:content.udk-berlin.de': '003',
  '!YIwQSiHDpoiNHDMWmC:content.udk-berlin.de': '004',
  '!XGSFQYZUnFtQNzOBnD:content.udk-berlin.de': '005',
  '!GFauydmVRlpqvDETXH:content.udk-berlin.de': '006',
  //'!cUpdRzxCGmLkwfrUeq:content.udk-berlin.de': '007', // !RpTarLRqYYIdDCBLyV:content.udk-berlin.de
  '!eVjUBtkIgDQkQSKVxm:content.udk-berlin.de': '008',
  //'!fwsuOeorRCZtTqwukc:content.udk-berlin.de': '009',
  '!OkEblSLtaWAObRcCHm:content.udk-berlin.de': '010',
  '!fPuAzLpetwUYPJZwCF:content.udk-berlin.de': '011',
  //'!FqPOhaHHAjYeliMfOU:content.udk-berlin.de': '012',
  //'!jocCvZKGntdCmvmmUG:content.udk-berlin.de': '013'
}

const TYPE_TO_SIZE_MAPPER = {
  marker: {
    simple: 20,
    default: 60
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

export default function GroundPlan ({ id, type, alt, useSimpleGroundPlan = false, scale = null }) {
  if (!useSimpleGroundPlan && !(id in ID_TO_GROUNDPLAN_FILENAME_MAPPER)) {
    useSimpleGroundPlan = true
  }

  let size = TYPE_TO_SIZE_MAPPER[type][useSimpleGroundPlan ? 'simple' : 'default']
  if (scale) {
    size = size * 2 ** scale
  }

  return (
    <StyledGroundPlan
      id={id}
      alt={alt}
      src={useSimpleGroundPlan ? getSimpleGroundPlanSrc(type) : getGroundPlanSrc(id, type)}
      size={size}
      loading="lazy"
    />
  )
}

const StyledGroundPlan = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`
