import React, {useEffect, useState} from 'react'

import { ThemeProvider } from "styled-components";
import LandingContent from "@/components/pages/landing/content";

import LandingBackground from "@/components/pages/landing/background";

import { useWindowSize } from "@/providers/window_size";
import { landingLTheme, landingMTheme, breakpoints } from "@/themes/pages/landing";

export default function Landing () {
  const [responsiveTheme, setResponsiveTheme] = useState(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(landingMTheme)
    } else if (windowSize?.width > breakpoints.m) {
      setResponsiveTheme(landingLTheme)
    }
  }, [windowSize?.width])

  return (
    <>
      {
        responsiveTheme ?
        <ThemeProvider theme={responsiveTheme}>
          <LandingBackground />
          <LandingContent />
        </ThemeProvider> : <></>
      }
    </>
  )
}