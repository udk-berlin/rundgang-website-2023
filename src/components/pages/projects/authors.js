import { useSlider } from "@/contexts/slider";
import styled from "styled-components";

const SLIDER_INDEX = 2

export default function ProjectAuthors({ project, fontSize = 1 }) {
  const slider = useSlider();
  return (
    <ProjectAuthorsContainer fontSize={fontSize} slider={slider} hasAuthors={project.authors.length > 0}>
      {project.authors.map((author) => (
        <span>{author.name}</span>
      ))}
    </ProjectAuthorsContainer>
  );
}

const ProjectAuthorsContainer = styled.div`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  /* margin: ${(props) => (props.slider >= SLIDER_INDEX ? "0.5rem 0 1rem 0" : "0px")} */
  height: ${(props) => (props.slider >= SLIDER_INDEX && props.hasAuthors ? "30px" : "0px")};
  overflow-y: hidden;
  transition: all 0.4s;

  padding-top: ${(props) => (props.slider >= SLIDER_INDEX ? "0.25rem" : "0")};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
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
