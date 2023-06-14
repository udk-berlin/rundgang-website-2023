import Link from 'next/link'

import styles from '@/styles/layout/Footer.module.css'

import Slider from '@/components/layout/slider'
import { HoverLink } from '@/components/hover_link'

export default function Footer () {
  return (
    <div className={styles.container}>
      <div>
        <Slider />
      </div>
      <HoverLink>
        <Link href="/program">
          <div className={styles.rundgang}> UdK Berlin Rundgang</div>
        </Link>
      </HoverLink>
      <div className={styles.static}>
        <div>
          <Link href="/contact">Kontakt</Link>
        </div>
        <div>
          <Link href="/imprint">Impressum</Link>
        </div>
        <div>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  )
}
