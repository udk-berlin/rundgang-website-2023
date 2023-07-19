import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { useSlider } from "@/providers/slider";
import ProjectLink from "@/components/pages/projects/project/link";

export default function ProjectTitle({ project, fontSize = 2, link }) {
  const [height, setHeight] = useState(0)
  const measureContainerRef = useRef(null);
  const slider = useSlider();

  useEffect(() => {
    setHeight(measureContainerRef.current.offsetHeight)
  }, [measureContainerRef?.current?.offsetHeight])

  return (
    <>
      <ProjectTitleMeasureContainer ref={measureContainerRef}>
        <ProjectTitleHeightMeasureContainerForMeasuring fontSize={fontSize}>
          <ProjectLink project={project} link={link}>
            <DropCap fontSize={fontSize}>{project?.name.substring(0, 1)}</DropCap>
            {project?.name.substring(1)}
          </ProjectLink>
        </ProjectTitleHeightMeasureContainerForMeasuring>
      </ProjectTitleMeasureContainer>

      <ProjectTitleContainer
        fontSize={fontSize}
        slider={slider}
        height={height}
      >
        <ProjectLink project={project} link={link}>
          <DropCap fontSize={fontSize}>{project?.name.substring(0, 1)}</DropCap>
          {project?.name.substring(1)}
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

  max-width: ${({ theme }) =>
          `calc(100vw / ${theme.MASONRY_COLUMNS} - ((${theme.MASONRY_COLUMNS} - 1) * ${theme.MASONRY_GUTTER}) - 2 * var(--program-padding) )`};
  
  padding-top: ${(props) => props.theme.MASONRY_GUTTER};
  padding-bottom: 2px;
  
  overflow-y: hidden;

  font-size: ${({ theme }) => theme.title.fontSize};
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const ProjectTitleContainer = styled.div`
  display: inline-block;

  max-height: ${({ slider, theme, height }) =>
    slider.position >= theme.title.sliderIndex
      ? `calc(${height}px + ${theme.MASONRY_GUTTER})`
      : "0px"};

  padding-top: ${(props) =>
          props.slider.position >= props.theme.title.sliderIndex
                  ? props.theme.MASONRY_GUTTER
                  : "0"};
  padding-bottom: ${(props) =>
          props.slider.position >= props.theme.title.sliderIndex ? "2px" : "0"};
  
  overflow-y: hidden;

  font-size: ${({ theme }) => theme.title.fontSize};
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;

  transition: all 0.6s;
`;

const DropCap = styled.span`
  float: left;

  margin-top: 0.15em;

  font-family: Gabriella;
  font-size: calc(${({ theme }) => theme.title.fontSize} * 1.1);
  line-height: 1;
  color: var(--color-pink);
  
  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    margin-top: ${({ theme }) => theme.dropCap.before.marginTop};
  }
  &:after {
    margin-bottom: -0.15em;
  }
`;
