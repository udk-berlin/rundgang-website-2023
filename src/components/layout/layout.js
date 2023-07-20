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
            <SliderProvider defaultPosition={defaultSliderPosition}>
              <LayoutContainer>
                <Header disableFilter={disableFilter} />
                <LayoutContentContainer>{children}</LayoutContentContainer>
                {footer}
              </LayoutContainer>
            </SliderProvider>
          </ThemeProvider> : <></>
      }
    </>
  );
}

const LayoutContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  overflow: hidden;
`;

const LayoutContentContainer = styled.div`
  height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  min-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  max-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  margin-top: ${({ theme }) => theme.header.height};
  //padding-bottom: ${({ theme }) => theme.footer.height};
  
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  
  overflow-y: scroll;
  overflow-x: hidden;
`;
