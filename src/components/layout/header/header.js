import styles from "@/styles/layout/header/Header.module.css";

import HeaderBar from "./bar";
import HeaderSearch from "./search";

export default function Header({ activateModal }) {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <HeaderSearch activateModal={activateModal} />
    </div>
  );
}
