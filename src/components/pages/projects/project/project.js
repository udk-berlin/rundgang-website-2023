import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import styled, { ThemeProvider } from "styled-components";

import ProjectAuthors from "@/components/pages/projects/project/authors";
import ProjectTitle from "@/components/pages/projects/project/title";
import Layout from "@/components/layout/layout";

import ProjectMedia from "@/components/pages/projects/project/media";

import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import { ProjectText } from "@/components/pages/projects/project/text";
import { useWindowSize } from "@/providers/window_size";
import {
  projectBreakpoints,
  projectLTheme,
  projectMTheme,
  projectSTheme,
} from "@/themes/pages/project";

const NUMBER_OF_SLIDER_STATES = 5

import { useData } from "@/providers/data/data";
import LoadingLayout from "@/components/layout/loading";

export default function Project() {
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const [withInfoGridOverlay, setWithInfoGridOverlay] = useState(true);
  const windowSize = useWindowSize();
  const { project } = useData(true)

  useEffect(() => {
    if (windowSize?.width <= projectBreakpoints.s) {
      setResponsiveTheme(projectSTheme);
      setWithInfoGridOverlay(false);
    } else if (windowSize?.width <= projectBreakpoints.m) {
      setResponsiveTheme(projectMTheme);
      setWithInfoGridOverlay(false);
    } else if (windowSize?.width > projectBreakpoints.m) {
      setResponsiveTheme(projectLTheme);
      setWithInfoGridOverlay(true);
    }
  }, [windowSize?.width]);

  return (
    <>
      {
        responsiveTheme ?
          <Layout
            disableFilter={true}
            disableSlider={withInfoGridOverlay}
            numberOfSliderStates={NUMBER_OF_SLIDER_STATES}
          >
            <ThemeProvider theme={responsiveTheme}>
              <ProjectContainer>
                <ProjectMedia project={project} withInfoGridOverlay={withInfoGridOverlay}/>
                <ProjectInfoContainer>
                  <ProjectTitle project={project} link={false} />
                  <ProjectAuthors project={project} fontSize={1} />
                  {withInfoGridOverlay ? <></> : <InfoGrid project={project} forProjectPage={true} />}
                  <ProjectText />
                </ProjectInfoContainer>
              </ProjectContainer>
            </ThemeProvider>
          </Layout> : <LoadingLayout />
      }
    </>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.flexDirection};
`;

const ProjectInfoContainer = styled.div`
  padding: ${({ theme }) => theme.info.padding};
`;
