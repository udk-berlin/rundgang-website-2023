import styled from "styled-components";

import ProjectLink from "@/components/pages/projects/link";

export default function ProjectTitle({ project, fontSize = 2.5 }) {
  return (
    <ProjectLink project={project}>
      <ProjectTitleContainer fontSize={fontSize}>
        {project.name}
      </ProjectTitleContainer>
    </ProjectLink>
  );
}

const ProjectTitleContainer = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  line-height: 1;
  display: block;

  &::first-letter {
    initial-letter: 2;
    font-family: "Gabriella";
    font-size: 2.5rem;
    color: var(--color-pink);
    padding-right: 8px;
  }
`;
