import styled from "styled-components";

import styles from "@/styles/layout/StaticLayout.module.css";

const StaticTitle = styled.div`
  font-weight: 600;
`;

const FaqStaticTitle = styled(StaticTitle)`
  padding: 0.5rem 0;
`;

const staticTitle = (layout, title) => {
  switch (layout) {
    case 'faq': return <FaqStaticTitle>{title}</FaqStaticTitle>
    default: return <StaticTitle>{title}</StaticTitle>
  }
}

export default function StaticLayout({ layout = 'default', title = '', children }) {
  return (
      <div className={styles.container}>
        {staticTitle(layout, title)}
        {children}
      </div>
  );
}
