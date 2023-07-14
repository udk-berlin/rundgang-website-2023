import { useSlider } from "@/providers/slider";
import styled from "styled-components";
import React from "react";

const SLIDER_INDEX = 2;

export default function ProjectAuthors({ project, fontSize = 1 }) {
  const slider = useSlider();
  const authors = project?.origin?.authors ? project.origin.authors : [];
  return (
    <ProjectAuthorsContainer
      fontSize={fontSize}
      slider={slider}
      hasAuthors={authors.length > 0}
    >
      {authors.map((author) => (
        <>
          {
            author ? <span>{author.name}</span> : <></>
          }
        </>
      ))}
    </ProjectAuthorsContainer>
  );
}

const ProjectAuthorsContainer = styled.div`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  /* margin: ${(props) =>
    props.slider.position >= SLIDER_INDEX ? "0.5rem 0 1rem 0" : "0px"} */
  height: ${(props) =>
    props.slider.position >= props.theme.author.sliderIndex && props.hasAuthors
      ? "30px"
      : "0px"};
  overflow-y: hidden;
  transition: all 0.4s;

  padding-top: ${(props) =>
    props.slider.position >= props.theme.author.sliderIndex ? "0.25rem" : "0"};

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
