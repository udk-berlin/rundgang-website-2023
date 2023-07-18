import React from "react";
import styled from "styled-components";

import { useSlider } from "@/providers/slider";

export default function ProjectAuthors({ project, fontSize = 1 }) {
  const slider = useSlider();
  const authors = project?.origin?.authors ? project.origin.authors : [];

  let uniqAuthorNames = []

  authors.forEach(author => (
    author?.name.split(',').forEach(name => uniqAuthorNames.push(name))
  ))

  uniqAuthorNames = [...new Set(uniqAuthorNames)]

  return (
    <ProjectAuthorsContainer
      fontSize={fontSize}
      slider={slider}
      hasAuthors={authors.length > 0}
    >
      {uniqAuthorNames.map(uniqAuthorName => <span>{uniqAuthorName}</span>)}
    </ProjectAuthorsContainer>
  );
}

const ProjectAuthorsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  height: ${({ slider, theme, hasAuthors }) => slider.position >= theme.author.sliderIndex && hasAuthors ? "fit-content" : "0px"};

  padding-top: ${(props) =>
          props.slider.position >= props.theme.author.sliderIndex ? "0.25rem" : "0"};
  
  overflow-x: auto;
  overflow-y: hidden;
  
  transition: all 0.4s;

  font-size: ${({ fontSize }) => fontSize}rem;
  text-transform: uppercase;
  
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
