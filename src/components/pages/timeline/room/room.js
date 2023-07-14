import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";

export default function TimelineLocationRoom({ room, index }) {
  const projectIds = Object.values(room.children).filter(child => child.type === 'item').map(child => child.id)

  return (
    <>
      <RoomContainer key={room.id}>
        <Room>
          <FormattedMessage id={'room'}/>: {room.name}
        </Room>
      </RoomContainer>

      <TimelineProjectsGroups projectIds={projectIds} roomIndex={index} />
    </>
  );
}

const RoomContainer = styled.div`
  display: flex;
  width: ${({theme}) => theme.width};

  margin-top: calc(${({theme}) => theme.borderWidth} * -1);
  margin-bottom: calc(${({theme}) => theme.box.height} * -1);
`;

const Room = styled.div`
  position: sticky;
  z-index: 4;
  left: ${({theme}) => theme.widthPerHour};
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({theme}) => theme.box.height};
  min-height: ${({theme}) => theme.box.height};
  max-height: ${({theme}) => theme.box.height};

  width: fit-content;
  
  padding: ${({theme}) => theme.box.padding};
  border: ${({theme}) => theme.border};
  
  background: ${({theme}) => theme.colors.white};

  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.small};
  color: ${({theme}) => theme.colors.black};

  cursor: default;
`;
