import styled from "styled-components";

import { TIMELINE_WIDTH } from "@/components/pages/timeline/timeline";

const RUNDGANG_DAYS = [
  'Freitag 16.07.',
  'Samstag 17.07.',
  'Sonntag 18.07.',
]

const RUNDGANG_TIMES = {
  start: '10:00',
  end: '23:00',
}

export default function TimelineHeader() {
  return (
      <HeaderContainer>
        <HeaderDaysContainer>
          {
            RUNDGANG_DAYS.map((day, index) => {
              return (
                <HeaderDayContainer>
                  <HeaderDay>{day}</HeaderDay>
                  <TimelineHeaderTimes index={index}/>
                </HeaderDayContainer>
              )})
          }
        </HeaderDaysContainer>
      </HeaderContainer>
  );
}

function TimelineHeaderTimes({ index }) {
  let leftLine
  if (index === 0) {
    leftLine = <HeaderTimesLeftLine withBorder={false}/>
  } else {
    leftLine = <HeaderTimesLeftLine withBorder={true}/>
  }

  let rightLine
  if (index === (RUNDGANG_DAYS.length - 1)) {
    rightLine = <HeaderTimesRightLine withBorder={false}/>
  } else {
    rightLine = <HeaderTimesRightLine withBorder={true}/>
  }

  return (
    <HeaderTimes>
      {leftLine}
      <div>{RUNDGANG_TIMES.start}</div>
      <HeaderTimesCenterLine/>
      <div>{RUNDGANG_TIMES.end}</div>
      {rightLine}
    </HeaderTimes>
  )
}


const HeaderContainer = styled.div`
  overflow-x: scroll;
  
  width: 100%;
  min-height: var(--locations-map-height);
`;

const HeaderDaysContainer = styled.div`
  display: flex;
  width: ${() => (`${TIMELINE_WIDTH}px`)};
`;

const HeaderDayContainer = styled.div`
  flex-grow: 1;
`;

const HeaderDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 1rem;

  border-bottom: 2px solid black;
  border-right: 2px solid black; 

  background: var(--color-pink); 
  
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-white);
`;

const HeaderTimes = styled.div`
  display: flex;
  justify-content: center;
  
  padding: 0.4rem 0;

  border-bottom: 2px solid black;
  
  background: var(--color-white);
`;

const HeaderTimesCenterLine = styled.div`
  width: 70%; 
  border-bottom: 2px solid var(--color-pink);
  margin: 0 14px 14px 14px;
`;

const HeaderTimesLeftLine = styled.div`
  width: 10%; 
  border-bottom: ${(props) => props.withBorder ? '2px solid var(--color-pink)' : ''};
  margin-bottom: 14px;
  margin-right: 14px;
`;

const HeaderTimesRightLine = styled.div`
  width: 10%; 
  border-bottom: ${(props) => props.withBorder ? '2px solid var(--color-pink)' : ''};
  margin-bottom: 14px;
  margin-left: 14px;
`;
