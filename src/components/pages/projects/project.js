import React from 'react'
import useSWR from 'swr'

import styles from '@/styles/pages/projects/Project.module.css'

import ProjectAuthors from '@/components/pages/projects/authors'
import ProjectTitle from '@/components/pages/projects/title'
import Layout from '@/components/layout/layout'

import { getRenderJsonUrl, fetcher } from '@/utils/api/api'

export default function Project ({ project }) {
  const { data, error, isLoading } = useSWR(getRenderJsonUrl(project.id), fetcher)

  return (
    <Layout>
      <Container>
        <ImageContainer>
          <ProjectInfoGrid project={project} />
          <ProjectImage project={project} full_size={1} />
        </ImageContainer>
        <InfoContainer>
          <ProjectTitle project={project} />
          <ProjectAuthors project={project} fontSize={1} />
          <ProjectText project={project} />
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

export function ProjectText({ project }) {
  return <div>{project.description.default}</div>;
}
