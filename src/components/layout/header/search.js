import { FormattedMessage } from "react-intl";
import styles from '@/styles/layout/header/Search.module.css'

export default function HeaderSearch () {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.search}>
        <FormattedMessage id={'search'} />
      </div>
      <div></div>
    </div>
  )
}
