import React from 'react'
import styled from "styled-components";

import { BOX_HEIGHT, WIDTH_PER_MINUTE, FIRST_TIME } from "@/components/pages/timeline/constants";

const minute = 1000 * 60;

export default function TimelineProject({ project, previousProject, top, projectIndex, roomIndex }) {
  let boxWidth
  if (previousProject) {
    boxWidth = ((project.start - previousProject.end) / minute) * WIDTH_PER_MINUTE;
  } else {
    boxWidth = ((project.start - FIRST_TIME) / minute) * WIDTH_PER_MINUTE;
  }

  return (
    <>
      <EmptySpaceBox isFirstProject={!previousProject} width={boxWidth} roomIndex={roomIndex}>
        <EmptySpaceLine roomIndex={roomIndex}/>
      </EmptySpaceBox>
      <ProjectTimeline
        id={`${project.start}-${project.end}-${projectIndex}`}
        start={0}
        width={(((project.end - project.start) / minute) * WIDTH_PER_MINUTE)}
        top={0}
        title={project.name}
      >
        {project.name}
      </ProjectTimeline>
    </>
  );
};

const ProjectTimeline = styled.div`
  position: relative;

  top: ${({ top }) => top}px;
  left: ${({ start }) => start}px;
  
  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
  
  padding: var(--calender-box-padding);
  margin-left: -2px;
  border: var(--calender-box-border);
  
  background: var(--color-white);

  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: var(--calender-box-font-size);
  font-weight: var(--calender-box-font-weight);

  box-sizing: border-box;
  overflow: hidden;
  
  &:hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;

const EmptySpaceBox = styled.div`
  position: relative;

  left: ${({ isFirstProject }) => isFirstProject ? 'calc(2 * var(--calender-floor-left))' : 0};
  width: ${({ width }) => width}px;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;

  background: ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink-transparent)' : 'var(--color-green-transparent)')};
  border-bottom: var(--info-border-width) solid var(--info-border-color);
  border-top: var(--info-border-width) solid var(--info-border-color);
  border-left: ${({ isFirstProject }) => isFirstProject ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
`;

const EmptySpaceLine = styled.div`
  padding-top: 15px; // todo: set correct padding (dynamic)
  border-bottom: 2px solid ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink)' : 'var(--color-green)')};
`;
