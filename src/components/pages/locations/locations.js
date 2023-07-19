import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import LocationsMap from "@/components/pages/locations/map/map";
import LocationsProgram from "@/components/pages/locations/program";
import LocationsGroundPlan from "@/components/pages/locations/ground_plan/ground_plan";
import LocationsFloorPlanPopup from "@/components/pages/locations/floor_plan/popup";
import Layout from "@/components/layout/layout";
import LoadingLayout from "@/components/layout/loading";

import { locationsLTheme, locationsMTheme } from "@/themes/pages/locations";
import { breakpoints } from "@/themes/pages/locations";

import { useWindowSize } from "@/providers/window_size";
import { useData } from "@/providers/data/data";

export default function Locations() {
  const [locationSelected, setLocationSelected] = useState(false)
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const windowSize = useWindowSize();
  const { projects, locations } = useData()

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(locationsMTheme);
    } else if (windowSize?.width > breakpoints.m) {
      setResponsiveTheme(locationsLTheme);
    }
  }, [windowSize?.width]);

  return (
    <>
      {
        responsiveTheme ?
          <Layout defaultSliderPosition={2}>
            <ThemeProvider theme={responsiveTheme}>
              <LocationsContainer>
                {locations && projects ? <LocationsMap projects={projects} locations={locations} locationSelected={locationSelected} /> : <></>}
                <LocationsGroundPlan />
                {responsiveTheme.id === 'l' ? <LocationsFloorPlanPopup /> : <></>}
                <LocationsProgram setLocationSelected={setLocationSelected} responsiveTheme={responsiveTheme} />
              </LocationsContainer>
            </ThemeProvider>
          </Layout> : <LoadingLayout />
      }
    </>
  );
}

const LocationsContainer = styled.div``;
