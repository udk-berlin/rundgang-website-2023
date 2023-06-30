import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import TimelineLocationRooms from '@/components/pages/timeline/room/rooms'
import { WIDTH_PER_HOUR } from '@/components/pages/timeline/constants'

export default function TimelineLocationFloor({ floor }) {
  const rooms = Object.values(floor.children).filter(child => child.template === 'location-room')

  return (
    <>
      <FloorContainer key={floor.id}>
        <FormattedMessage id={'floor'} />: {floor.name}
      </FloorContainer>

      <TimelineLocationRooms rooms={rooms} />
    </>
  );
}

const FloorContainer = styled.div`
  position: sticky;
  z-index: 3;
  left: ${WIDTH_PER_HOUR / 2}px;
  top: 0;
  
  display: flex;
  align-items: center;

  height: var(--calender-floor-room-project-height);
  min-height: var(--calender-floor-room-project-height);
  max-height: var(--calender-floor-room-project-height);
  width:  calc(100vw - ${WIDTH_PER_HOUR / 2}px);

  padding: var(--info-grid-padding);
  margin-top: -2px;
  
  border: var(--border-width) solid var(--border-color);
  border-right: 0;

  background: var(--color-white);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-black);

  cursor: default;
`;
