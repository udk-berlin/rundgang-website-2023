import styled, { ThemeProvider } from "styled-components";

import { SliderProvider } from "@/providers/slider";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import FooterMobile from "@/components/layout/footer/footer_mobile";
import { useEffect, useState } from "react";

import { useWindowSize } from "@/providers/window_size";

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
  defaultSliderPosition = 0
}) {
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const [footer, setFooter] = useState(<></>);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(layoutMTheme);
      setFooter(<FooterMobile numberOfSliderStates={numberOfSliderStates} disableSlider={disableSlider} />)
    } else if (windowSize?.width > breakpoints.m) {
      setResponsiveTheme(layoutLTheme);
      setFooter(<Footer numberOfSliderStates={numberOfSliderStates} disableSlider={disableSlider} />)
    }
  }, [windowSize?.width]);

  return (
    <>
      {
        responsiveTheme ?
          <ThemeProvider theme={responsiveTheme}>
            <LayoutContainer>
              <SliderProvider defaultPosition={defaultSliderPosition}>
                <Header disableFilter={disableFilter} />
                <Content>{children}</Content>
                {footer}
              </SliderProvider>
            </LayoutContainer>
          </ThemeProvider> : <></>
      }
    </>
  );
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ theme }) => theme.header.height} 1fr ${({ theme }) => theme.footer.height}
  
`;

const Content = styled.div`
`;
