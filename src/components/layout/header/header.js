import styled from "styled-components";

import HeaderBar from "@/components/layout/header/bar/bar";
import HeaderFiltersBar from "@/components/layout/header/filters/bar";
import HeaderFilters from "@/components/layout/header/filters/filters";
import { useEffect, useState } from "react";
import HeaderBarMobile from "@/components/layout/header/bar/bar_mobile";
import { useWindowSize } from "@/providers/window_size";
import { breakpoints } from "@/themes/layout";

export default function Header({ disableFilter }) {
  const windowSize = useWindowSize();

  const getHeader = () => {
    if (windowSize.width <= breakpoints.m) {
      return <HeaderBarMobile />
    } else if (windowSize.width) {
      return <HeaderBar />
    }
  }

  const [showFilters, setShowFilters] = useState(false);
  const [header, setHeader] = useState(getHeader());

  useEffect(() => {
    setHeader(getHeader())
  }, [windowSize.width]);

  return (
    <HeaderContainer>
      {header}
      <HeaderFiltersBar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        disableFilter={disableFilter}
      />
      {disableFilter ? (
        <></>
      ) : (
        <HeaderFilters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  //width: 100%;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  border: ${({ theme }) => theme.border};

  background-color: var(--color-white);
`;
