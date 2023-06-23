import React from "react";
import styled from "styled-components";

import { NUMBER_OF_QUARTER_HOURS, WIDTH_PER_QUARTER_HOUR, range } from "@/components/pages/timeline/constants";

export default function TimelineGrid() {


  return (
    <>
      {range(0, NUMBER_OF_QUARTER_HOURS).map(hour => {
        return (<TimelineGridLine x={(hour * WIDTH_PER_QUARTER_HOUR)} key={`timeline-quarter-hour-${hour}`} id={`timeline-quarter-hour-${hour}`} />)
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
