import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styled, { ThemeProvider } from "styled-components";

import ProjectAuthors from "@/components/pages/projects/project/authors";
import ProjectTitle from "@/components/pages/projects/project/title";
import Layout from "@/components/layout/layout";
import ProjectImage, {
  ProjectAdditionalMedia,
} from "@/components/pages/projects/project/image";
import ProjectInfoGrid from "@/components/pages/projects/project/info_grid";
import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import { ProjectText } from "@/components/pages/projects/project/text";
import { getRenderJsonUrl, fetcher } from "@/utils/api/api";
import useWindowSize from "@/hooks/window_size";
import {
  projectBreakpoints,
  projectLTheme,
  projectMTheme,
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
    if (windowSize.width <= projectBreakpoints.s) {
      setResponsiveTheme(projectSTheme);
      setInfoGridPos(false);
    } else if (windowSize.width <= projectBreakpoints.m) {
      setResponsiveTheme(projectMTheme);
      setInfoGridPos(false);
    } else {
      setResponsiveTheme(projectLTheme);
      setInfoGridPos(true);
    }
  }, [windowSize.width]);

  return (
    <Layout
      disableFilter={true}
      disableSlider={infoGridPos ? true : false}
      numberOfSliderStates={4}
    >
      <ThemeProvider theme={responsiveTheme}>
        <Container>
          <ImageContainer>
            {infoGridPos ? <ProjectInfoGrid project={project} /> : <></>}
            <ProjectImage project={project} fullSize={true} />
            <ProjectAdditionalMedia project={project} data={data} />
          </ImageContainer>
          <InfoContainer>
            <ProjectTitle project={project} />
            <ProjectAuthors project={project} fontSize={1} />
            {infoGridPos ? <></> : <InfoGrid project={project} />}
            <ProjectText project={project} data={data} />
          </InfoContainer>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.container.flexDirection};
`;

const ImageContainer = styled.div`
  flex: 6;
  height: ${({ theme }) => theme.imageContainer.height};
  color: white;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: ${({ theme }) => theme.imageContainer.flexDirection};
`;

const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.infoContainer.padding};
  flex: 4;
  height: calc(
    100vh - var(--layout-header-search-container-height) -
      calc(var(--layout-header-bar-container-height) * 2)
  );
  overflow: scroll;
`;
