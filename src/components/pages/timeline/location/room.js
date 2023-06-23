import styled from "styled-components";

import {TIMELINE_WIDTH, mapTimeToX, BOX_WIDTH, BOX_HEIGHT} from "@/components/pages/timeline/constants";
import TimelineProject from "@/components/pages/timeline/project";

const PADDING_LEFT = 40;

export default function TimelineLocationRoom({ room }) {
  const width = mapTimeToX(BOX_WIDTH) - PADDING_LEFT

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
    }
  ]

  return (
    <RoomContainer key={`room-${1}`} width={TIMELINE_WIDTH}>
      <RoomInnerContainer width={TIMELINE_WIDTH}>
        <RoomTitleContainer width={width}>
          <RoomTitle width={width}>{room.name}</RoomTitle>
        </RoomTitleContainer>

        {projects.map((project, index) => {
          return (
            <TimelineProject project={project} prevProject={projects[index -1]} index={index}/>
          )
        })}
      </RoomInnerContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  margin-top: 6px;
  width: ${({ width }) => width}px;
`;

const RoomInnerContainer = styled.div`
  position: relative;
  
  display: flex;
  align-items: flex-start;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
  
  margin-left: 40px; // todo: set correct padding (dynamic)
  
  //background: var(--color-transparent-pink);
  //outline: var(--calender-box-border);
  //border: var(--calender-box-border);
  //border-top: var(--calender-box-border);
  //border-bottom: var(--calender-box-border);
`;

const RoomTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 40px;
  top: 0;

  display: flex;
  
  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
`;

const RoomTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;
  
  padding: var(--info-grid-padding);

  border: var(--info-border-width) solid var(--info-border-color);
  
  background-color: white;
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;