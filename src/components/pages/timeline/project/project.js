import React, { useState } from 'react'
import styled from "styled-components";

import { PROJECTS_FIRST_TIME, PROJECTS_LAST_TIME } from "@/themes/pages/timeline";
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
                src={project.thumbnail.replace('crop', 'scale')}
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
  top: calc(${({theme}) => theme.box.height} - ${({theme}) => theme.borderWidth});
  left: 0;
  z-index: 5;

  max-height: 30vh;
  max-width: 30vw;
  
  height: auto;
  width: auto;

  border: ${({theme}) => theme.border};
  
  overflow: visible;
  
  pointer-events: none;
`

const ProjectTimeline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  top: ${({ top }) => top}px;
  left: ${({ start }) => start}px;
  
  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};
  width: calc(${({theme}) => theme.widthPerMinute} * ${({ timespan }) => timespan});
  
  padding: ${({theme}) => theme.box.padding};
  border: ${({theme}) => theme.border};
  border-right: ${({ borderRight, theme }) => borderRight ? theme.border : 0};
  
  background:  ${({theme}) => theme.colors.white};

  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight:  ${({theme}) => theme.fontWeights.small};

  box-sizing: border-box;
  overflow: hidden;
  
  :hover {
    background: ${({theme}) => theme.colors.pink};
    color:  ${({theme}) => theme.colors.white};
  }
  
  cursor: pointer;
`;

const EmptyTimeline = styled.div`
  position: relative;
  z-index: -1;

  width: calc(${({theme}) => theme.widthPerMinute} * ${({ timespan }) => timespan});

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};

  background: ${({ roomIndex, theme }) => ((roomIndex % 2 === 0) ? theme.colors.pinkTransparent : theme.colors.greenTransparent)};
  
  border-bottom: ${({ isLastGroup, hasNoProjectUnderneath }) => isLastGroup || hasNoProjectUnderneath ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-top: ${({ isFirstGroup }) => isFirstGroup ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
  border-left: ${({ isFirstProject }) => isFirstProject ? 'var(--info-border-width) solid var(--info-border-color)' : 0};
`;

const EmptyTimelineLine = styled.div`
  padding-top: calc(${({theme}) => theme.box.height} / 2 - ${({theme}) => theme.borderWidth}); // todo: set correct padding (dynamic)
  border-bottom: ${({theme}) => theme.borderWidth} solid ${({ roomIndex, theme }) => ((roomIndex % 2 === 0) ? theme.colors.pink : theme.colors.green)};
`;


const FirstEmptyTimeline = styled.div`
  position: relative;
  z-index: -1;
  
  width: ${({theme}) => theme.widthPerHour};

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};

  background:  ${({theme}) => theme.colors.white};
`;
