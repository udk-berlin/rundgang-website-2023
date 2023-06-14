import { FormattedMessage } from "react-intl";

import styles from '@/styles/pages/landing/LandingMenu.module.css'
import { LocalizedLink } from "@/components/localization/links";

export default function LandingMenu () {

  return (
    <div className={styles.container}>
      <div className={[styles.row].join(' ')}>
        <SvgLink href={'/program'} title={'program'} className={styles.svgTextL} />
      </div>

      <div className={[styles.row, styles.bottomRow].join(' ')}>
        <SvgLink href={'/places'} title={'places'} className={styles.svgTextM} />
        <SvgLink href={'/calendar'} title={'dates'} className={styles.svgTextM} />
      </div>
    </div>
  )
}

function SvgLink ({ href, title, className }) {
  return (
    <Svg>
      <LocalizedLink href={href}>
        <text className={[styles.svgText, className].join(' ')} x="0%" y="75%">
          <FormattedMessage id={title}/>
        </text>
      </LocalizedLink>
    </Svg>
  )
}

function Svg ({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      preserveAspectRatio="200w"
      viewBox="0 0 548 80"
    >
      {children}
    </svg>
  )
}
