import React from 'react'
import styled from "styled-components";

import { BOX_HEIGHT, WIDTH_PER_MINUTE, FIRST_TIME } from "@/components/pages/timeline/constants";

function millisecondsToMinutes(milliseconds) {
  return milliseconds / (1000 * 60);
}

export default function TimelineProject({ project, previousProject, nextGroup, totalGroups, groupIndex, projectIndex, roomIndex }) {
  let boxWidth
  if (previousProject) {
    boxWidth = millisecondsToMinutes((project.start - previousProject.end)) * WIDTH_PER_MINUTE
  } else {
    boxWidth = millisecondsToMinutes((project.start - FIRST_TIME)) * WIDTH_PER_MINUTE
  }

  return (
    <>
      <EmptySpaceBox isFirstProject={!previousProject} isFirstGroup={groupIndex === 0} isLastGroup={groupIndex === totalGroups - 1} hasNoProjectUnderneath={!nextGroup || nextGroup[nextGroup.length - 1].end < project.start} width={boxWidth} roomIndex={roomIndex}>
        <EmptySpaceLine roomIndex={roomIndex}/>
      </EmptySpaceBox>
      <ProjectTimeline
        id={`${project.id}-${project.end}${project.start}`}
        start={0}
        width={(millisecondsToMinutes((project.end - project.start)) * WIDTH_PER_MINUTE)}
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
  //margin-left: -2px;
  border: var(--calender-box-border);
  
  background: var(--color-white);

  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: var(--calender-box-font-size);
  font-weight: var(--calender-box-font-weight);

  box-sizing: border-box;
  overflow: hidden;
  
  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;

const EmptySpaceBox = styled.div`
  position: relative;
  z-index: -1;

  left: ${({ isFirstProject }) => isFirstProject ? 'calc(2 * var(--calender-floor-left))' : 0};
  width: ${({ isFirstProject, width }) => isFirstProject ? width : width}px;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;

  background: ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink-transparent)' : 'var(--color-green-transparent)')};
  border-bottom: ${({ isLastGroup, hasNoProjectUnderneath }) => isLastGroup || hasNoProjectUnderneath ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-top: ${({ roomIndex, isFirstGroup }) => isFirstGroup ? 'var(--info-border-width) solid var(--info-border-color)' : ((roomIndex % 2 === 0) ? 'var(--info-border-width) solid var(--color-pink-light)' : 'var(--info-border-width) solid var(--color-green-light)')};
  border-left: ${({ isFirstProject }) => isFirstProject ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
`;

const EmptySpaceLine = styled.div`
  padding-top: 15px; // todo: set correct padding (dynamic)
  border-bottom: 2px solid ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink)' : 'var(--color-green)')};
`;
