import styled, { ThemeProvider } from "styled-components";

import { SliderProvider } from "@/providers/slider";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import FooterMobile from "@/components/layout/footer/footer_mobile";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/window_size";
import {
  layoutBreakpoints,
  layoutLTheme,
  layoutMTheme,
  layoutSTheme,
} from "@/themes/layout";
import { breakpoints } from "@/themes/theme";

export default function Layout({
  children,
  disableFilter = false,
  numberOfSliderStates = 7,
  disableSlider = false,
}) {
  const [responsiveTheme, setResponsiveTheme] = useState(layoutLTheme);
  const [mobile, setMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= breakpoints.m) {
      setResponsiveTheme(layoutMTheme);
      setMobile(true);
    } else {
      setResponsiveTheme(layoutLTheme);
      setMobile(false);
    }
  }, [windowSize.width]);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <Container>
        <SliderProvider>
          <Header disableFilter={disableFilter} />
          <Content>{children}</Content>
          {mobile ? (
            <FooterMobile
              numberOfSliderStates={numberOfSliderStates}
              disableSlider={disableSlider}
            />
          ) : (
            <Footer
              numberOfSliderStates={numberOfSliderStates}
              disableSlider={disableSlider}
            />
          )}
        </SliderProvider>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:
    calc(
      var(--layout-header-bar-container-height) +
        var(--layout-header-search-container-height) + 2 * var(--border-width)
    )
    1fr var(--layout-header-bar-container-height);
`;

const Content = styled.div`
  //border-left: var(--border-width) solid var(--border-color);
  //border-right: var(--border-width) solid var(--border-color);
`;
