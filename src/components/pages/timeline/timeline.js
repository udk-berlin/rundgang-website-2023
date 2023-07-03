import TimelineHeader from "@/components/pages/timeline/header/header";
import Layout from "@/components/layout/layout";
import TimelineContent from "@/components/pages/timeline/content";
import {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";

import { breakpoints } from "@/themes/theme";
import { timelineLTheme, timelineMTheme } from "@/themes/pages/timeline";
import useWindowSize from "@/hooks/window_size";

const NUMBER_OF_SLIDER_STATES = 3

export default function Timeline() {
  const [responsiveTheme, setResponsiveTheme] = useState(timelineLTheme)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width <= breakpoints.m) {
      setResponsiveTheme(timelineMTheme)
    } else {
      setResponsiveTheme(timelineLTheme)
    }
  }, [windowSize.width])

  return (
    <Layout numberOfSliderStates={NUMBER_OF_SLIDER_STATES}>
      <ThemeProvider theme={responsiveTheme}>
        <TimelineHeader />
        <TimelineContent />
      </ThemeProvider>
    </Layout>
  );
}
