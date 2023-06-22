import styled from "styled-components";

import HeaderBar from "@/components/layout/header/bar";
import HeaderFiltersBar from "@/components/layout/header/filters/bar";
import HeaderFilters from "@/components/layout/header/filters/filters";
import { useState } from "react";

export default function Header() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <HeaderContainer>
      <HeaderBar />
      <HeaderFiltersBar showFilters={showFilters} setShowFilters={setShowFilters} />
      <HeaderFilters showFilters={showFilters} setShowFilters={setShowFilters} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  height: fit-content;
  z-index: 99;

  display: grid;
  grid-template-columns: 1fr;
  border: var(--border-width) solid var(--border-color);

  background-color: #fff;
`;