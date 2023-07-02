import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import TimelineLocationRooms from '@/components/pages/timeline/room/rooms'

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
  left: ${({theme}) => theme.floor.left};
  top: 0;
  
  display: flex;
  align-items: center;

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};
  width: ${({theme}) => theme.floor.width};

  padding: ${({theme}) => theme.box.padding};
  margin-top: calc(${({theme}) => theme.borderWidth} * -1);
  
  border: ${({theme}) => theme.border};
  border-right: 0;
  border-left: ${({theme}) => theme.floor.borderLeft};

  background: ${({theme}) => theme.colors.white};

  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.small};
  color: ${({theme}) => theme.colors.black};

  cursor: default;
`;
