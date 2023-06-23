import React from 'react'
import styled from "styled-components";

import {BOX_HEIGHT, WIDTH_PER_MINUTE} from "@/components/pages/timeline/constants";

const minute = 1000 * 60;

export default function TimelineProject({ project, prevProject, top, index }) {
  let width = ((project.end - project.start) / minute) * WIDTH_PER_MINUTE;

  let boxWidth = 10;
  if (prevProject) {
    boxWidth = ((project.start - prevProject.end ) / minute) * WIDTH_PER_MINUTE;
  }

  return (
    <>
      <EmptySpaceBox width={boxWidth}>
        <EmptySpaceLine></EmptySpaceLine>
      </EmptySpaceBox>
      <ProjectTimeline
        id={`${project.start}-${project.end}-${index}`}
        start={0}
        width={width}
        // top={0}
        title={project.name}
      >
        {project.name}
      </ProjectTimeline>
    </>
  );
};

const ProjectTimeline = styled.div`
  position: relative;

  //top: ${({ top }) => top}px;
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

  left: 0;
  width: ${({ width }) => width}px;

  //padding-top: 15px; // todo: set correct padding (dynamic)
  //border-bottom: 2px solid var(--color-pink);

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;

  background: var(--color-transparent-pink);
  border-bottom: var(--info-border-width) solid var(--info-border-color);
  border-top: var(--info-border-width) solid var(--info-border-color);
`;

const EmptySpaceLine = styled.div`
  padding-top: 15px; // todo: set correct padding (dynamic)
  border-bottom: 2px solid var(--color-pink);
`;


