import styles from "@/styles/layout/StaticLayout.module.css";

export default function StaticLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
