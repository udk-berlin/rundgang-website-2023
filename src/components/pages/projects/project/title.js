import { useRef } from "react";
import styled from "styled-components";

import { useSlider } from "@/providers/slider";
import {
  MASONRY_COLUMNS,
  MASONRY_GUTTER,
} from "@/components/pages/program/program";
import ProjectLink from "@/components/pages/projects/project/link";

const SLIDER_INDEX = 1;

export default function ProjectTitle({ project, fontSize = 2 }) {
  const measureContainerRef = useRef(null);
  const slider = useSlider();

  return (
    <>
      <ProjectTitleMeasureContainer ref={measureContainerRef}>
        <ProjectTitleHeightMeasureContainerForMeasuring fontSize={fontSize}>
          <DropCap fontSize={fontSize}>{project.name.substring(0, 1)}</DropCap>
          {project.name.substring(1)}
        </ProjectTitleHeightMeasureContainerForMeasuring>
      </ProjectTitleMeasureContainer>

      <ProjectTitleContainer
        fontSize={fontSize}
        slider={slider}
        height={
          measureContainerRef.current
            ? measureContainerRef.current.offsetHeight
            : 0
        }
      >
        <ProjectLink project={project}>
          <DropCap fontSize={fontSize}>{project.name.substring(0, 1)}</DropCap>
          {project.name.substring(1)}
        </ProjectLink>
      </ProjectTitleContainer>
    </>
  );
}

const ProjectTitleMeasureContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: -1000px;
  left: -10000px;
`;

const ProjectTitleHeightMeasureContainerForMeasuring = styled.div`
  display: inline-block;

  overflow-y: hidden;
  padding-top: ${() => MASONRY_GUTTER};
  padding-bottom: 2px;

  max-width: ${() =>
    `calc(100vw / ${MASONRY_COLUMNS} - ((${MASONRY_COLUMNS} - 1) * ${MASONRY_GUTTER}) - 2 * var(--program-padding) )`};

  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 1;
  //text-transform: uppercase;
`;

const ProjectTitleContainer = styled.div`
  display: inline-block;

  max-height: ${(props) =>
    props.slider.position >= SLIDER_INDEX
      ? `calc(${props.height}px + ${MASONRY_GUTTER}) `
      : "0px"};
  overflow-y: hidden;
  padding-top: ${(props) =>
    props.slider.position >= SLIDER_INDEX ? MASONRY_GUTTER : "0"};
  padding-bottom: ${(props) =>
    props.slider.position >= SLIDER_INDEX ? "2px" : "0"};

  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 1;
  text-transform: uppercase;

  transition: all 0.6s;
`;

const DropCap = styled.span`
  margin-top: 0.15em;
  /* margin-left: -0.05em; */
  /* margin: 0.1em 0 0.1em 0em; */
  /* padding: 0.1em 0.1em 0.1em 0; */

  float: left;

  font-family: Gabriella;
  font-size: ${(props) => props.fontSize * 1.1}rem;
  color: var(--color-pink);
  line-height: 1;

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
