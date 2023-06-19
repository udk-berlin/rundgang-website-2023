import { useContext } from "react";
import styled from "styled-components";

import { SliderContext } from "@/components/contexts/slider_context";
import ProjectLink from "@/components/pages/projects/link";
import ProjectTitle from "@/components/pages/projects/title";
import ProjectAuthors from "@/components/pages/projects/authors";
import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import ProjectImage from "@/components/pages/projects/image";

export default function ProjectCell({ project }) {
  return (
    <ProjectCellContainer key={project.id}>
      <ProjectLink project={project}>
        <ProjectImage project={project} />
      </ProjectLink>
      <ProjectLink project={project}>
        <ProjectTitle project={project} fontSize={1} />
      </ProjectLink>
      <ProjectAuthors project={project} fontSize={0.8} />
      <InfoGrid project={project} />
    </ProjectCellContainer>
  );
}

const ProjectCellContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    width: 100%;
  }
`;
