import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import styled, { ThemeProvider } from "styled-components";

import ProjectAuthors from "@/components/pages/projects/project/authors";
import ProjectTitle from "@/components/pages/projects/project/title";
import Layout from "@/components/layout/layout";

import ProjectMedia from "@/components/pages/projects/project/media";

import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import { ProjectText } from "@/components/pages/projects/project/text";
import useWindowSize from "@/hooks/window_size";
import {
  projectBreakpoints,
  projectLTheme,
  projectMTheme,
  projectSTheme,
} from "@/themes/pages/project";

const NUMBER_OF_SLIDER_STATES = 5

import { useData } from "@/providers/data/data";

export default function Project() {
  const [responsiveTheme, setResponsiveTheme] = useState(projectLTheme);
  const [infoGridPos, setInfoGridPos] = useState(true);
  const windowSize = useWindowSize();
  const { project } = useData(true)

  useEffect(() => {
    if (windowSize?.width <= projectBreakpoints.s) {
      setResponsiveTheme(projectSTheme);
      setInfoGridPos(false);
    } else if (windowSize?.width <= projectBreakpoints.m) {
      setResponsiveTheme(projectMTheme);
      setInfoGridPos(false);
    } else {
      setResponsiveTheme(projectLTheme);
      setInfoGridPos(true);
    }
  }, [windowSize?.width]);

  return (
    <Layout
      disableFilter={true}
      disableSlider={infoGridPos}
      numberOfSliderStates={NUMBER_OF_SLIDER_STATES}
    >
      <ThemeProvider theme={responsiveTheme}>
        <ProjectContainer>
          <ProjectMedia project={project} infoGridPos={infoGridPos}/>
          <InfoContainer>
            <ProjectTitle project={project} link={false} />
            <ProjectAuthors project={project} fontSize={1} />
            {infoGridPos ? <></> : <InfoGrid project={project} forProjectPage={true} />}
            <ProjectText />
          </InfoContainer>
        </ProjectContainer>
      </ThemeProvider>
    </Layout>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.flexDirection};
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.info.padding};
  flex: 4;
  height: calc(
    100vh - var(--layout-header-search-container-height) -
      calc(var(--layout-header-bar-container-height) * 2)
  );
  overflow: scroll;
`;
