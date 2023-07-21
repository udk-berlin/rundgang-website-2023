import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import ProjectTitle from "@/components/pages/projects/project/title";
import ProjectAuthors from "@/components/pages/projects/project/authors";
import { ProjectText } from "@/components/pages/projects/project/text";
import ProjectInfoGrid from "@/components/pages/program/project/info_grid/info_grid";
import ProjectMedia from "@/components/pages/projects/project/media";
import Layout from "@/components/layout/layout";
import LoadingLayout from "@/components/layout/loading";

import { useData } from "@/providers/data/data";
import { useWindowSize } from "@/providers/window_size";
import { useMetaHeaderTitleDispatch } from "@/providers/title";

import {
  projectBreakpoints,
  projectLTheme,
  projectMTheme,
  projectSTheme,
} from "@/themes/pages/project";

const NUMBER_OF_SLIDER_STATES = 5

export default function Project() {
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const [withInfoGridOverlay, setWithInfoGridOverlay] = useState(true);
  const windowSize = useWindowSize();
  const { project } = useData(true)
  const dispatch = useMetaHeaderTitleDispatch()

  dispatch({
    type: 'set-title',
    name: project.name
  })

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
                  {withInfoGridOverlay ? <></> : <ProjectInfoGrid project={project} forProjectPage={true} />}
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
  position: relative;
  
  height: ${({ theme }) => theme.media.height};
  min-height: ${({ theme }) => theme.media.height};
  max-height: ${({ theme }) => theme.media.height};

  padding: ${({ theme }) => theme.info.padding};

  overflow-x: ${({ theme }) => theme.media.overflowX};
  overflow-y: ${({ theme }) => theme.media.overflowY};
`;
