import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";
import TimelineProjectsBar from "@/components/pages/timeline/projects/bar";

export default function TimelineLocationRoom({ scaleX, locWidth, room}) {
  return (
    <RoomContainer key={`room-${1}`} width={TIMELINE_WIDTH}>
      <RoomTitleContainer width={locWidth}>
        <RoomTitle>{room.name}</RoomTitle>
      </RoomTitleContainer>
      {/*<ProjectsContainer>*/}
      {/*  <TimelineProjectsBar*/}
      {/*    start={scaleX(1658566800) - locWidth}*/}
      {/*    end={scaleX(1658610000) - locWidth}*/}
      {/*  >*/}
      {/*    Öffnungszeiten: Samstag, 23.7., 11:00–23:00 Uhr*/}
      {/*  </TimelineProjectsBar>*/}
      {/*</ProjectsContainer>*/}
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  position: relative;
  
  display: flex;
  align-items: flex-start;

  min-height: 30px;
  width: ${({ width }) => width}px;
`;

const RoomTitleContainer = styled.div`
  position: sticky;
  z-index: 50;
  left: 26px;
  top: 0;

  width: ${({ width }) => width}px;
  height: 100%;
  
  line-height: 1;
`;

const RoomTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-width: 100px;
  min-height: 30px;
  
  padding: var(--info-grid-padding);

  outline: var(--info-border-width) solid var(--info-border-color);
  background-color: white;
  
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;

const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  padding: 4px 0;
`;
