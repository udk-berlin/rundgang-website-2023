import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import LocationsMap from "@/components/pages/locations/map/map";
import LocationsProgram from "@/components/pages/locations/program";
import LocationsGroundPlan from "@/components/pages/locations/ground_plan/ground_plan";
import LocationsMobileGroundPlan from "@/components/pages/locations/mobile/ground_plan/ground_plan";

import LocationsFloorPlanPopup from "@/components/pages/locations/floor_plan/popup";
import Layout from "@/components/layout/layout";
import LoadingLayout from "@/components/layout/loading";

import { locationsLTheme, locationsMTheme } from "@/themes/pages/locations";
import { timelineMTheme, timelineLTheme } from "@/themes/pages/timeline";
import { breakpoints } from "@/themes/pages/locations";

import { useWindowSize } from "@/providers/window_size";
import { useData } from "@/providers/data/data";
import TimelineHeader from "@/components/pages/timeline/header/header";
import TimelineContent from "@/components/pages/timeline/content";

export default function Locations() {
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
                  {locations && projects ? <LocationsMap projects={projects} locations={locations} /> : <></>}
                  {responsiveTheme.id === 'l' ? <LocationsGroundPlan /> : <LocationsMobileGroundPlan />}
                  {/*{responsiveTheme.id === 'l' ? <LocationsFloorPlanPopup /> : <></>}*/}
                  {/*{responsiveTheme.id === 'l' ? <LocationsProgram /> : <></>}*/}
                </LocationsContainer>
            </ThemeProvider>
          </Layout> : <LoadingLayout />
      }
    </>
  );
}

const LocationsContainer = styled.div`
  // height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  // min-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  // max-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  //
  // overflow: scroll;
  // pointer-events: all;
  
  position: relative;

  display: flex;

  overflow-x: auto;
  overflow-y: auto;
  
  width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});
  min-width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});
  max-width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});
`;
