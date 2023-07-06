import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Layout from "@/components/layout/layout";
import LocationsMap from "@/components/pages/locations/map/map";
import LocationsProgram from "@/components/pages/locations/program";
import LocationsGroundPlan from "@/components/pages/locations/ground_plan/ground_plan";
import LocationsFloorPlanPopup from "@/components/pages/locations/floor_plan/popup";
import { locationsLTheme, locationsMTheme } from "@/themes/pages/locations";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/pages/locations";

export default function Locations({ locations }) {
  const [locationSelected, setLocationSelected] = useState(false)
  const [responsiveTheme, setResponsiveTheme] = useState(locationsLTheme);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(locationsMTheme);
    } else {
      setResponsiveTheme(locationsLTheme);
    }
  }, [windowSize?.width]);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <LocationsContainer>
        <LocationsMap locations={locations} locationSelected={locationSelected} />
        <LocationsGroundPlan />
        {
          responsiveTheme.id === 'l' ?
            <LocationsFloorPlanPopup /> :
            <></>
        }
        <LocationsProgram setLocationSelected={setLocationSelected} responsiveTheme={responsiveTheme} />
      </LocationsContainer>
    </ThemeProvider>
  );
}

const LocationsContainer = styled.div`
  height: ${({ theme }) => theme.height};
  min-height: ${({ theme }) => theme.height};
  max-height: ${({ theme }) => theme.height};
  
  overflow: scroll;
`;
