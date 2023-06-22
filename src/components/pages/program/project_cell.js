import styled from "styled-components";

import ProjectLink from "@/components/pages/projects/link";
import ProjectTitle from "@/components/pages/projects/title";
import ProjectAuthors from "@/components/pages/projects/authors";
import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import ProjectImage from "@/components/pages/projects/image";

export default function ProjectCell({ key, project }) {
  return (
    <ProjectCellContainer key={key}>
      <ProjectLink project={project}>
        <ProjectImage project={project} />
      </ProjectLink>
      <ProjectTitle project={project} fontSize={1.3} />
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
