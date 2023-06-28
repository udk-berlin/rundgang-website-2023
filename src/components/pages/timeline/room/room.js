import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import { TIMELINE_WIDTH } from '@/components/pages/timeline/constants'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";

export default function TimelineLocationRoom({ room, index }) {
  const projects = Object.values(room.children).filter(child => child.type === 'item')

  return (
    <>
      <RoomContainer key={room.id} width={TIMELINE_WIDTH}>
        <Room>
          <FormattedMessage id={'room'}/>: {room.name}
        </Room>
      </RoomContainer>

      <TimelineProjectsGroups projects={projects} roomIndex={index} />
    </>
  );
}

const RoomContainer = styled.div`
  display: flex;
  width: ${({ width }) => width}px;

  margin-top: calc(var(--border-width) * -1);
  margin-bottom: calc(var(--calender-floor-room-project-height) * -1);
`;

const Room = styled.div`
  position: sticky;
  z-index: 4;
  left: calc(2 * var(--calender-floor-left));
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);
  
  padding: var(--info-grid-padding);
  border: var(--info-border-width) solid var(--info-border-color);
  
  background: var(--color-white);
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-black);

  cursor: default;
`;
