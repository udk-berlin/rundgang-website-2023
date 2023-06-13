import styles from "@/styles/layout/Layout.module.css";

import MetaHeader from "@/components/meta_header";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Layout({ children }) {
  return (
      <>
          <MetaHeader />
          <main className={styles.container}>
              <Header />
              <div className={styles.content}>{children}</div>
              <Footer />
          </main>
      </>
  );
}
