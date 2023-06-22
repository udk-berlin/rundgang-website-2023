import styled from "styled-components";

import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { useState } from "react";
import FilterOverlay from "@/components/layout/filter_overlay";

export default function Layout({ children }) {
  const [FilterModal, setFilterModal] = useState(false);

  function activateModal() {
    setFilterModal(true);
  }

  function hideModal() {
    setFilterModal(false);
  }

  return (
    <Container>
      <Header activateModal={activateModal} />
      <Content>
        <FilterOverlay active={FilterModal} hideModal={hideModal} />
        {children}
      </Content>
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
        var(--layout-header-search-container-height) + 4px
    )
    1fr var(--layout-header-bar-container-height);
  padding-top: calc(
    var(--layout-header-bar-container-height) +
      var(--layout-header-search-container-height)
  );
`;

const Content = styled.div`
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  position: relative;
  top: 4px;
  height: auto;
`;
