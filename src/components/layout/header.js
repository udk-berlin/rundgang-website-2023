import styles from "@/styles/layout/Header.module.css";

import HeaderBar from "./header_bar";
import HeaderSearch from "./header_search";

export default function Header() {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <HeaderSearch />
    </div>
  );
}
