import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import { TIMELINE_WIDTH, BOX_HEIGHT, FIRST_TIME, LAST_TIME } from '@/components/pages/timeline/constants'
import TimelineProject from "@/components/pages/timeline/project";

export default function TimelineLocationRoom({ room, roomIndex, projects }) {
  console.log(projects)
  let groupedProjects = groupProjects(sortFlattenedProjects(flattenProjects(projects)))

  return (
    <>
      <RoomContainer key={room.id} width={TIMELINE_WIDTH}>
        <Room>
          <FormattedMessage id={'room'}/>: {room.name}
        </Room>
      </RoomContainer>

      {
        groupedProjects.map((projectsGroup, groupIndex) => {
          return <ProjectsContainer key={`${room.id}-${groupIndex}`} width={TIMELINE_WIDTH}>
            {projectsGroup.map((project, projectIndex) => {
              return (
                <TimelineProject project={project} previousProject={projectsGroup[projectIndex - 1]} totalGroups={groupedProjects.length} nextGroup={groupedProjects[groupIndex + 1]} groupIndex={groupIndex} projectIndex={projectIndex} roomIndex={roomIndex}/>
              )
            })}
          </ProjectsContainer>
        })
      }
    </>
  );
}

const RoomContainer = styled.div`
  display: flex;
  width: ${({ width }) => width}px;

  margin-top: -2px;
  margin-bottom: -${BOX_HEIGHT}px;
`;

const Room = styled.div`
  position: sticky;
  z-index: 4;
  left: calc(2 * var(--calender-floor-left));
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  
  padding: var(--info-grid-padding);
  border: var(--info-border-width) solid var(--info-border-color);
  
  background: var(--color-white);
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-black);

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;

const ProjectsContainer = styled.div`
  left: -2px;
  display: flex;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;

  margin-top: -2px;
`;

function flattenProjects(projects) {
  const flattenedProjects = []

  projects.forEach(project => {
    if('temporal' in project) {
      project.temporal.forEach(time => {
        flattenedProjects.push({
          id: project.id,
          name: project.name,
          start: parseInt(time.start) * 1000,
          end: parseInt(time.end) * 1000,
        })
      })
    }
  })

  return flattenedProjects
}

function sortFlattenedProjects(projects) {
  return projects.sort(compareProjects)
}

function compareProjects(a, b) {
  if (a.start > b.start) {
    return 1
  } else if (a.start === b.start) {
    return 0
  } else if (a.start < b.start) {
    return -1
  }
}

function groupProjects(projects) {
  const groups = []

  projects.forEach(project => {
    if (groups.length === 0) {
      groups.push([project])
      return
    }

    let groupFound = false;
    groups.forEach((group, index) => {
      if (!groupFound && group[group.length - 1].end < project.start) {
        group.push(project)
        groupFound = true
      }
    })

    if (!groupFound) {
      groups.push([project])
    }
  })

  return groups
}
