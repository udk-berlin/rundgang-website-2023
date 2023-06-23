import React from "react";
import styled from "styled-components";

import { HOURS, WIDTH_PER_HOUR } from "@/components/pages/timeline/constants";



export default function TimelineGrid() {


  return (
    <>
      {HOURS.map(hour => {
        return (<TimelineGridLine x={(hour * WIDTH_PER_HOUR)} key={`timeline-hour-${hour}`} id={`timeline-hour-${hour}`} />)
      })}
    </>
  );
};

const TimelineGridLine = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: ${({ x }) => x}px;
  
  height: 100%;
  
  border-left: var(--calender-grid-border);
`;