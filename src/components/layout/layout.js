import styled from 'styled-components'

import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:
    calc(
      var(--layout-header-bar-container-height) +
        var(--layout-header-search-container-height)
    )
    1fr var(--layout-header-bar-container-height);
`;

const Content = styled.div`
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
`;
