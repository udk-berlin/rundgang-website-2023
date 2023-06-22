import { SliderContext } from "@/components/contexts/slider_context";
import { useContext } from "react";
import styled from "styled-components";

export default function ProjectAuthors({ project, fontSize = 1 }) {
  const slider = useContext(SliderContext);
  return (
    <ProjectAuthorsContainer fontSize={fontSize} slider={slider} idx={2}>
      {project.authors.map((author) => (
        <span>{author.name}</span>
      ))}
    </ProjectAuthorsContainer>
  );
}

const ProjectAuthorsContainer = styled.div`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  /* margin: ${(props) => (props.slider >= 2 ? "0.5rem 0 1rem 0" : "0px")} */
  max-height: ${(props) => (props.slider >= 2 ? "500px" : "0px")};
  overflow-y: hidden;
  transition: all 0.3s;

  padding-top: ${(props) => (props.slider >= 1 ? "0.25rem" : "0")};

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
