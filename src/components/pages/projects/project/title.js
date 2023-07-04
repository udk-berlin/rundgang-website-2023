import { useRef } from "react";
import styled from "styled-components";

import { useSlider } from "@/providers/slider";
import ProjectLink from "@/components/pages/projects/project/link";

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
  padding-top: ${(props) => props.theme.MASONRY_GUTTER};
  padding-bottom: 2px;

  max-width: ${({ theme }) =>
    `calc(100vw / ${theme.MASONRY_COLUMNS} - ((${theme.MASONRY_COLUMNS} - 1) * ${theme.MASONRY_GUTTER}) - 2 * var(--program-padding) )`};

  font-weight: 600;
  font-size: ${({ theme }) => theme.title.fontSize};
  line-height: 1;
`;

const ProjectTitleContainer = styled.div`
  display: inline-block;

  max-height: ${({ slider, theme, height }) =>
    slider.position >= theme.title.sliderIndex
      ? `calc(${height}px + ${theme.MASONRY_GUTTER}) `
      : "0px"};
  overflow-y: hidden;
  padding-top: ${(props) =>
    props.slider.position >= props.theme.title.sliderIndex
      ? props.theme.MASONRY_GUTTER
      : "0"};
  padding-bottom: ${(props) =>
    props.slider.position >= props.theme.title.sliderIndex ? "2px" : "0"};

  font-weight: 600;
  font-size: ${({ theme }) => theme.title.fontSize};
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
  font-size: calc(${({ theme }) => theme.title.fontSize} * 1.1);
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
