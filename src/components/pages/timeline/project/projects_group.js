import styled from "styled-components";

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
  left: calc(${({theme}) => theme.borderWidth} * -1);
  display: flex;

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};
  width: ${({theme}) => theme.width};

  margin-top: calc(${({theme}) => theme.borderWidth} * -1);
`;
