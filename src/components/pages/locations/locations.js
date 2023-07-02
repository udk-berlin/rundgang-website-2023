import React, {useEffect, useState} from 'react'
import { ThemeProvider } from "styled-components";

import Layout from '@/components/layout/layout'
import LocationsMap from '@/components/pages/locations/map/map'
import LocationsProgram from "@/components/pages/locations/program";
import LocationsGroundPlan from "@/components/pages/locations/ground_plan/ground_plan";
import LocationsFloorPlanPopup from "@/components/pages/locations/floor_plan/popup";
import {locationsLTheme, locationsMTheme} from "@/themes/pages/locations";
import useWindowSize from "@/hooks/window_size";
import {breakpoints} from "@/themes/theme";

export default function Locations ({ locations }) {
  const [responsiveTheme, setResponsiveTheme] = useState(locationsLTheme)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width <= breakpoints.m) {
      setResponsiveTheme(locationsMTheme)
    } else {
      setResponsiveTheme(locationsLTheme)
    }
  }, [windowSize.width])

  return (
    <Layout>
      <ThemeProvider theme={responsiveTheme}>
        <LocationsMap locations={locations} />
        <LocationsGroundPlan />
        {/*<LocationsFloorPlanPopup />*/}
        <LocationsProgram />
      </ThemeProvider>
    </Layout>
  )
}
