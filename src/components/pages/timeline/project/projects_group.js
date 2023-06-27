import styled from "styled-components";

import { TIMELINE_WIDTH } from '@/components/pages/timeline/constants'
import TimelineProject from "@/components/pages/timeline/project/project";

export default function TimelineProjectsGroup({ projectsGroup, projectsGroups, projectsGroupIndex, roomIndex }) {
  return (
    <>
      {
        <ProjectsGroupContainer>
          {projectsGroup.map((project, projectIndex) => {
            return (
              <TimelineProject project={project} previousProject={projectsGroup[projectIndex - 1]} projectsGroupsLength={projectsGroups.length} nextProjectGroup={projectsGroups[projectsGroupIndex + 1]} projectsGroupIndex={projectsGroupIndex} roomIndex={roomIndex}/>
            )
          })}
        </ProjectsGroupContainer>
      }
    </>
  );
}

const ProjectsGroupContainer = styled.div`
  left: calc(var(--border-width) * -1);
  display: flex;

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);
  width: ${TIMELINE_WIDTH}px;

  margin-top: calc(var(--border-width) * -1);
`;