import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import { TIMELINE_WIDTH, BOX_HEIGHT } from "@/components/pages/timeline/constants";
import TimelineProject from "@/components/pages/timeline/project";

export default function TimelineLocationRoom({ room, roomIndex }) {
  const projects = [
    {
      name: 'Test 1',
      start: 1689951600000,
      end: 1689958800000,
    },
    {
      name: 'Test 2',
      start: 1689962400000,
      end: 1689964200000,
    },
    {
      name: 'Test 3',
      start: 1689965400000,
      end: 1689975400000,
    },
    {
      name: 'Test 4',
      start: 1689995400000,
      end: 1689999400000,
    }
  ]

  return (
    <>
      <RoomContainer key={room.id} width={TIMELINE_WIDTH}>
        <Room>
          <FormattedMessage id={'room'}/>: {room.name}
        </Room>
      </RoomContainer>

      <ProjectsContainer key={room.id} width={TIMELINE_WIDTH}>
        {projects.map((project, projectIndex) => {
          return (
            <TimelineProject project={project} previousProject={projects[projectIndex -1]} projectIndex={projectIndex} roomIndex={roomIndex}/>
          )
        })}
      </ProjectsContainer>
      <ProjectsContainer key={room.id} width={TIMELINE_WIDTH}>
        {projects.map((project, projectIndex) => {
          return (
            <TimelineProject project={project} previousProject={projects[projectIndex -1]} projectIndex={projectIndex} roomIndex={roomIndex}/>
          )
        })}
      </ProjectsContainer>
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
  display: flex;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;

  margin-top: -2px;
`;
