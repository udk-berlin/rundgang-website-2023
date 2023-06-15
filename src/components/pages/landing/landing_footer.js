import { FormattedMessage } from "react-intl";

import styles from '@/styles/pages/landing/LandingFooter.module.css'
import { LocalizedLink } from "@/components/localization/links";

export default function LandingFooter () {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <LocalizedLink href="/contact">
          <FormattedMessage id={'contact'} />
        </LocalizedLink>
      </div>
      <div className={styles.imprint}>
        <LocalizedLink href="/imprint">
          <FormattedMessage id={'imprint'} />
        </LocalizedLink>
      </div>
      <div className={styles.faq}>
        <LocalizedLink href="/faq">
          <FormattedMessage id={'faq'} />
        </LocalizedLink>
      </div>
    </div>
  )
}
