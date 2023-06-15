import styled from "styled-components";

export default function ProjectAuthors({ project, fontSize = 1 }) {
  return (
    <ProjectAuthorsContainer fontSize={fontSize}>
      {project.authors.map((author) => (
        <span>{author.name}</span>
      ))}
    </ProjectAuthorsContainer>
  );
}

const ProjectAuthorsContainer = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  padding: 0.5rem 0 1rem 0;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
  }

  & > *:not(:last-child):after {
    content: "/";
    padding: 0 1rem;
  }
`;
