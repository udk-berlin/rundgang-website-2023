import styles from '@/styles/layout/Layout.module.css'

import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'

export default function Layout ({ children }) {
  return (
      <>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </>
  )
}