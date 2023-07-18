import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import TimelineLocationRooms from '@/components/pages/timeline/room/rooms'
import TimelineProjectsGroups from "@/components/pages/timeline/project/projects_groups";
import { LocalizedLink } from "@/components/localization/links";

export default function TimelineLocationFloor({ floor }) {
  const rooms = Object.values(floor.children).filter(child => child.template === 'location-room')
  const projectIds = Object.values(floor.children).filter(child => child.type === 'item').map(child => child.id)

  return (
    <>
      <FloorContainer key={floor.id}>
        <LocalizedLink href={`/locations/${floor.id}`}>
          <FormattedMessage id={'floor'} />: {floor.name}
        </LocalizedLink>
      </FloorContainer>

      <TimelineLocationRooms rooms={rooms} />
      {projectIds.length > 0 ? <TimelineProjectsGroups projectIds={projectIds} /> : <></>}
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
  
  margin-top: calc(${({theme}) => theme.borderWidth} * -1);
  
  border: ${({theme}) => theme.border};
  border-right: 0;
  border-left: ${({theme}) => theme.floor.borderLeft};

  background: ${({theme}) => theme.colors.white};

  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.small};
  color: ${({theme}) => theme.colors.black};

  a {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    
    padding: ${({theme}) => theme.box.padding};
    
    :hover {
      color: ${({theme}) => theme.colors.white};
      background: ${({theme}) => theme.colors.pink};
    }
  }
`;
