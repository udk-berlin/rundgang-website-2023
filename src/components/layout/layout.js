import Footer from "./footer";
import Header from "./header";
import styles from "@/styles/layout/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
