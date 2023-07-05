import styled, { ThemeProvider } from "styled-components";

import { SliderProvider } from "@/providers/slider";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import FooterMobile from "@/components/layout/footer/footer_mobile";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/window_size";
import {
  breakpoints,
  layoutLTheme,
  layoutMTheme,
} from "@/themes/layout";

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
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(layoutMTheme);
      setMobile(true);
    } else {
      setResponsiveTheme(layoutLTheme);
      setMobile(false);
    }
  }, [windowSize?.width]);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <LayoutContainer>
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
      </LayoutContainer>
    </ThemeProvider>
  );
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ theme }) => theme.header.height} 1fr ${({ theme }) => theme.footer.height}
  
`;

const Content = styled.div`
  // height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  // min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  // max-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
`;
