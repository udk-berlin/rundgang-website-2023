import styled from "styled-components";

import HeaderBar from "@/components/layout/header/bar/bar";
import HeaderFiltersBar from "@/components/layout/header/filters/bar";
import HeaderFilters from "@/components/layout/header/filters/filters";
import { useEffect, useState } from "react";
import HeaderBarMobile from "@/components/layout/header/bar/bar_mobile";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/layout";

export default function Header({ disableFilter, setIsLinkClicked }) {
  const [showFilters, setShowFilters] = useState(false);

  const [mobile, setMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize?.width]);

  return (
    <HeaderContainer>
      {mobile ? <HeaderBarMobile setIsLinkClicked={setIsLinkClicked} /> : <HeaderBar setIsLinkClicked={setIsLinkClicked} />}
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
  position: sticky;
  width: 100%;
  top: 0;
  height: fit-content;
  z-index: 99;

  display: grid;
  grid-template-columns: 1fr;
  border: var(--border-width) solid var(--border-color);

  background-color: var(--color-white);
`;
