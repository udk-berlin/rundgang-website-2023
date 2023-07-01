import React, { useState } from 'react'
import styled from "styled-components";

import { PROJECTS_FIRST_TIME, PROJECTS_LAST_TIME } from "@/components/pages/timeline/constants";
import ProjectLink from "@/components/pages/projects/project/link";

function millisecondsToMinutes(milliseconds) {
  return milliseconds / (1000 * 60);
}

export default function TimelineProject({ project, previousProject, nextProjectGroup, projectsGroupsLength, projectsGroupIndex, roomIndex }) {
  const [showImage, setShowImage] = useState(false);

  let projectStart

  if (project.start < PROJECTS_FIRST_TIME) {
    projectStart = PROJECTS_FIRST_TIME
  } else {
    projectStart = project.start
  }

  let projectEnd

  if (project.end > PROJECTS_LAST_TIME) {
    projectEnd = PROJECTS_LAST_TIME
  } else {
    projectEnd = project.end
  }

  let projectTimespan = millisecondsToMinutes((projectEnd - projectStart))

  let emptyTimelineTimespan = 0
  if (previousProject) {
    emptyTimelineTimespan = millisecondsToMinutes((project.start - previousProject.end))
  } else {
    emptyTimelineTimespan = millisecondsToMinutes((project.start - PROJECTS_FIRST_TIME))
  }

  return (
    <>
      {!previousProject ?  <FirstEmptyTimeline /> : <></>}
      {projectStart === PROJECTS_FIRST_TIME ? <></> :
        <EmptyTimeline
          isFirstProject={!previousProject}
          isFirstGroup={projectsGroupIndex === 0}
          isLastGroup={projectsGroupIndex === projectsGroupsLength - 1}
          hasNoProjectUnderneath={!nextProjectGroup || nextProjectGroup[nextProjectGroup.length - 1].end < project.start}
          timespan={emptyTimelineTimespan}
          roomIndex={roomIndex}
        >
          <EmptyTimelineLine roomIndex={roomIndex}/>
        </EmptyTimeline>
      }
      <ProjectContainer>
        <ProjectLink project={project}>
          <ProjectTimeline
            id={`${project.id}-${project.end}${project.start}`}
            start={0}
            timespan={projectTimespan}
            top={0}
            borderRight={project.end < PROJECTS_LAST_TIME}
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
  top: calc(var(--calender-floor-room-project-height) - var(--calender-box-border-width));
  left: 0;
  z-index: 5;

  max-height: 30vh;
  max-width: 30vw;
  
  height: auto;
  width: auto;

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
  width: calc(var(--timeline-width-per-minute) * ${({ timespan }) => timespan});
  
  padding: var(--calender-box-padding);
  border: var(--calender-box-border);
  border-right: ${({ borderRight }) => borderRight ? 'var(--calender-box-border)' : 0};
  
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

const EmptyTimeline = styled.div`
  position: relative;
  z-index: -1;

  width: calc(var(--timeline-width-per-minute) * ${({ timespan }) => timespan});

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);

  background: ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink-transparent)' : 'var(--color-green-transparent)')};
  border-bottom: ${({ isLastGroup, hasNoProjectUnderneath }) => isLastGroup || hasNoProjectUnderneath ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-top: ${({ isFirstGroup }) => isFirstGroup ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-left: ${({ isFirstProject }) => isFirstProject ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
`;

const EmptyTimelineLine = styled.div`
  padding-top: calc(var(--calender-floor-room-project-height) / 2 - var(--border-width)); // todo: set correct padding (dynamic)
  border-bottom: var(--border-width) solid ${({ roomIndex }) => ((roomIndex % 2 === 0) ? 'var(--color-pink)' : 'var(--color-green)')};
`;


const FirstEmptyTimeline = styled.div`
  position: relative;
  z-index: -1;
  
  width: var(--timeline-width-per-hour);

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);

  background: var(--color-white);
`;
