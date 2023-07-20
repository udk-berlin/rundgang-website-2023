import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import TimelineHeader from "@/components/pages/timeline/header/header";
import TimelineContent from "@/components/pages/timeline/content";
import Layout from "@/components/layout/layout";

import { breakpoints } from "@/themes/theme";
import { timelineLTheme, timelineMTheme } from "@/themes/pages/timeline";

import { useWindowSize } from "@/providers/window_size";
import LoadingLayout from "@/components/layout/loading";

const NUMBER_OF_SLIDER_STATES = 3

export default function Timeline() {
  const [responsiveTheme, setResponsiveTheme] = useState(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(timelineMTheme)
    } else if (windowSize?.width > breakpoints.m) {
      setResponsiveTheme(timelineLTheme)
    }
  }, [windowSize?.width])

  return (
    <>
      {
        responsiveTheme ?
          <Layout numberOfSliderStates={NUMBER_OF_SLIDER_STATES}>
            <ThemeProvider theme={responsiveTheme}>
              <TimelineHeader />
              <TimelineContent />
            </ThemeProvider>
          </Layout> : <LoadingLayout />
      }
    </>
  );
}
