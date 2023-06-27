import React from "react";
import styled from "styled-components";

import { NUMBER_OF_HOURS, WIDTH_PER_HOUR, range } from "@/components/pages/timeline/constants";

export default function TimelineGrid() {
  return (
    <>
      {range(2, NUMBER_OF_HOURS - 1).map(hour => {
        return (<GridLine x={hour * WIDTH_PER_HOUR} key={`hour-${hour}`}/>)
      })}
    </>
  );
};

const GridLine = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: ${({ x }) => x}px;

  height: 100%;

  border-left: var(--calender-grid-border);
`;
