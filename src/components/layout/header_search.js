import styles from '@/styles/layout/HeaderSearch.module.css'

export default function HeaderSearch () {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.search}>
        <input type="text" placeholder={'Suche'}></input>
      </div>
      <div></div>
    </div>
  )
}
