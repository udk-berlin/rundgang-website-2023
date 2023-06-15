import { FormattedMessage } from "react-intl";

import styles from '@/styles/pages/landing/LandingMenu.module.css'
import { LocalizedLink } from "@/components/localization/links";

const hrefMapper = {
  'program': '/program',
  'places': '/places',
  'dates': '/dates',
}

const classNameMapper = {
  'program': {
    svg: styles.svgTop,
    text: styles.svgTextL,
  },
  'places': {
    svg: styles.svgBottom,
    text: styles.svgTextM,
  },
  'dates': {
    svg: styles.svgBottom,
    text: styles.svgTextM,
  },
}

export default function LandingMenu () {

  return (
    <div className={styles.container}>
      <div className={[styles.row].join(' ')}>
        <SvgLink id={'program'} />
      </div>

      <div className={[styles.row, styles.bottomRow].join(' ')}>
        <SvgLink id={'places'} />
        <SvgLink id={'dates'} />
      </div>
    </div>
  )
}

function SvgLink ({ id }) {
  return (
    <Svg id={id}>
      <LocalizedLink href={hrefMapper[id]}>
        <text className={[styles.svgText, classNameMapper[id].text].join(' ')} x="0%" y="75%">
          <FormattedMessage id={id}/>
        </text>
      </LocalizedLink>
    </Svg>
  )
}

function Svg ({ children, id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNameMapper[id].svg}
      preserveAspectRatio="200w"
      viewBox="0 0 548 80"
    >
      {children}
    </svg>
  )
}
