import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styled, { ThemeProvider } from "styled-components";

import ProjectAuthors from "@/components/pages/projects/project/authors";
import ProjectTitle from "@/components/pages/projects/project/title";
import Layout from "@/components/layout/layout";

import ProjectMedia from "@/components/pages/projects/project/media/media";

import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import { ProjectText } from "@/components/pages/projects/project/text";
import { getRenderJsonUrl, fetcher } from "@/utils/api/api";
import useWindowSize from "@/hooks/window_size";
import {
  projectBreakpoints,
  projectLTheme,
  // projectMTheme,
  projectSTheme,
} from "@/themes/pages/project";

export default function Project({ project }) {
  const { data, error, isLoading } = useSWR(
    getRenderJsonUrl(project.id),
    fetcher
  );

  const [responsiveTheme, setResponsiveTheme] = useState(projectLTheme);
  const [infoGridPos, setInfoGridPos] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= projectBreakpoints.s) {
      setResponsiveTheme(projectSTheme);
      setInfoGridPos(false);
    // } else if (windowSize?.width <= projectBreakpoints.m) {
    //   setResponsiveTheme(projectMTheme);
    //   setInfoGridPos(false);
    } else {
      setResponsiveTheme(projectLTheme);
      setInfoGridPos(true);
    }
  }, [windowSize?.width]);

  return (
    <Layout
      disableFilter={true}
      disableSlider={infoGridPos}
      numberOfSliderStates={5}
    >
      <ThemeProvider theme={responsiveTheme}>
        <ProjectContainer>
          <ProjectMedia project={project} infoGridPos={infoGridPos} data={data}/>
          <InfoContainer>
            <ProjectTitle project={project} link={false} />
            <ProjectAuthors project={project} fontSize={1} />
            {infoGridPos ? <></> : <InfoGrid project={project} />}
            <ProjectText project={project} data={data} />
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
