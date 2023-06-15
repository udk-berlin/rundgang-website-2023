import styled from 'styled-components'

import ProjectLink from "@/components/pages/project/link";

export default function ProjectTitle ({ project }) {
  return (
    <ProjectLink project={project}>
      <ProjectTitleContainer>
        {project.name}
      </ProjectTitleContainer>
    </ProjectLink>
  )
}

const ProjectTitleContainer = styled.div`
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1;
  display: block;

  &::first-letter {
    initial-letter: 2;
    font-family: "Gabriella";
    font-size: 2rem;
    color: var(--color-pink);
    padding-right: 4px;
  }
`