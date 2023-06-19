import React from "react";
import useSWR from "swr";

import styled from "styled-components";

import ProjectAuthors from "@/components/pages/projects/authors";
import ProjectTitle from "@/components/pages/projects/title";
import Layout from "@/components/layout/layout";
import ProjectImage, {
  ProjectAdditionalMedia,
} from "@/components/pages/projects/image";
import ProjectInfoGrid from "@/components/pages/projects/info_grid";

import { getRenderJsonUrl, fetcher } from "@/utils/api/api";
import { ProjectText } from "@/components/pages/projects/text";

export default function Project({ project }) {
  const { data, error, isLoading } = useSWR(
    getRenderJsonUrl(project.id),
    fetcher
  );

  return (
    <Layout>
      <Container>
        <ImageContainer>
          <ProjectInfoGrid project={project} />
          <ProjectImage project={project} fullSize={true} />
          <ProjectAdditionalMedia project={project} data={data} />
        </ImageContainer>
        <InfoContainer>
          <ProjectTitle project={project} />
          <ProjectAuthors project={project} fontSize={1} />
          <ProjectText project={project} data={data} />
        </InfoContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 6;
  height: calc(
    100vh - var(--layout-header-search-container-height) -
      calc(var(--layout-header-bar-container-height) * 2)
  );
  color: white;
  overflow: scroll;
  position: relative;
  top: 4px;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  flex: 4;
  height: calc(
    100vh - var(--layout-header-search-container-height) -
      calc(var(--layout-header-bar-container-height) * 2)
  );
  overflow: scroll;
`;
