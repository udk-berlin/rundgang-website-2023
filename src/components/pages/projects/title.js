import styled from "styled-components";

export default function ProjectTitle({ project, fontSize = 2.5 }) {
  return (
    <ProjectTitleContainer fontSize={fontSize}>
      <DropCap fontSize={fontSize}>{project.name.substring(0, 1)}</DropCap>
      {project.name.substring(1)}
    </ProjectTitleContainer>
  );
}

const ProjectTitleContainer = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  line-height: 1;
  display: inline-block;
`;

const DropCap = styled.span`
  float: left;
  font-family: Gabriella;
  font-size: ${(props) => props.fontSize * 2.5}rem;
  /* font-size: ${(props) => props.fontSize * 1.3}rem; */
  color: var(--color-pink);

  line-height: 1;
  margin-top: 0.1em;
  margin-left: -0.05em;
  padding-right: 0.05em;
  /* margin: 0.1em 0 0.1em 0em; */
  /* padding: 0.1em 0.1em 0.1em 0; */

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    margin-top: -0.2em;
  }
  &:after {
    margin-bottom: -0.15em;
  }
`;
