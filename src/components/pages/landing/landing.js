import React, {useEffect, useState} from 'react'

import { ThemeProvider } from "styled-components";
import LandingContent from "@/components/pages/landing/content";

import LandingBackground from "@/components/pages/landing/background";

import useWindowSize from "@/hooks/window_size";
import { landingLTheme, landingMTheme, breakpoints } from "@/themes/pages/landing";
import Layout from "@/components/layout/layout";
import {LoadingContainer} from "@/components/loading";

export default function Landing () {
  const [menuLinkClicked, setMenuLinkClicked] = useState(false)
  const [responsiveTheme, setResponsiveTheme] = useState(landingLTheme)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(landingMTheme)
    } else {
      setResponsiveTheme(landingLTheme)
    }
  }, [windowSize?.width])

  return (
    <>
      {
        menuLinkClicked ?
        (
          <Layout disableFilter={true} disableSlider={true}>
            <LoadingContainer>Loading...</LoadingContainer>
          </Layout>
        ) :
          <ThemeProvider theme={responsiveTheme}>
            <LandingBackground />
            <LandingContent setMenuLinkClicked={setMenuLinkClicked} />
          </ThemeProvider>
      }
    </>
  )
}