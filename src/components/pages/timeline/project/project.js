import React, { useState } from 'react'
import styled from "styled-components";

import { WIDTH_PER_MINUTE, FIRST_TIME } from "@/components/pages/timeline/constants";
import ProjectLink from "@/components/pages/projects/link";

function millisecondsToMinutes(milliseconds) {
  return milliseconds / (1000 * 60);
}

export default function TimelineProject({ project, previousProject, nextProjectGroup, projectsGroupsLength, projectsGroupIndex, roomIndex }) {
  const [showImage, setShowImage] = useState(false);

  let projectWidth = millisecondsToMinutes((project.end - project.start)) * WIDTH_PER_MINUTE

  let emptySpaceWidth
  if (previousProject) {
    emptySpaceWidth = millisecondsToMinutes((project.start - previousProject.end)) * WIDTH_PER_MINUTE
  } else {
    emptySpaceWidth = millisecondsToMinutes((project.start - FIRST_TIME)) * WIDTH_PER_MINUTE
  }

  if (!previousProject) {
    emptySpaceWidth -= 100
  }

  return (
    <>
      {
        !previousProject ?  <FirstEmptySpaceBox /> : <></>
      }
      <EmptySpaceBox
        isFirstProject={!previousProject}
        isFirstGroup={projectsGroupIndex === 0}
        isLastGroup={projectsGroupIndex === projectsGroupsLength - 1}
        hasNoProjectUnderneath={!nextProjectGroup || nextProjectGroup[nextProjectGroup.length - 1].end < project.start}
        width={emptySpaceWidth}
        roomIndex={roomIndex}
      >
        <EmptySpaceLine roomIndex={roomIndex}/>
      </EmptySpaceBox>
      <ProjectContainer>
        <ProjectLink project={project}>
          <ProjectTimeline
            id={`${project.id}-${project.end}${project.start}`}
            start={0}
            width={projectWidth}
            top={0}
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
          >
            {project.name}
          </ProjectTimeline>
        </ProjectLink>
        {
          project.thumbnail ?
            <ProjectLink project={project}>
              <ProjectImage
                src={project.thumbnail}
                alt={project.name}
                loading="lazy"
                showImage={showImage}
              />
            </ProjectLink> : <></>
        }
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.div`
  position: relative;
`

const ProjectImage = styled.img`
  display: ${({ showImage }) => showImage ? 'inline' : 'none'};
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 500px;
  height: auto;

  border: var(--calender-box-border);
  
  overflow: visible;
  
  pointer-events: none;
`

const ProjectTimeline = styled.div`
  position: relative;

  top: ${({ top }) => top}px;
  left: ${({ start }) => start}px;
  
  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);
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
  
  cursor: pointer;
`;

const EmptySpaceBox = styled.div`
  position: relative;
  z-index: -1;

  width: ${({ isFirstProject, width }) => isFirstProject ?  `calc(${width}px - 2 * var(--calender-floor-left))`  : `${width}px`};

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);

  background: ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink-transparent)' : 'var(--color-green-transparent)')};
  border-bottom: ${({ isLastGroup, hasNoProjectUnderneath }) => isLastGroup || hasNoProjectUnderneath ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-top: ${({ isFirstGroup }) => isFirstGroup ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-left: ${({ isFirstProject }) => isFirstProject ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
`;

const EmptySpaceLine = styled.div`
  padding-top: calc(var(--calender-floor-room-project-height) / 2 - var(--border-width)); // todo: set correct padding (dynamic)
  border-bottom: var(--border-width) solid ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink)' : 'var(--color-green)')};
`;


const FirstEmptySpaceBox = styled.div`
  position: relative;
  z-index: -1;

  width: 100px;

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);

  background: var(--color-white);
`;
