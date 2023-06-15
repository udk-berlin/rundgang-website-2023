import styles from '@/styles/layout/Layout.module.css'

import MetaHeader from '@/components/page/meta_header'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function Layout ({ children }) {
  return (
      <>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </>
  )
}