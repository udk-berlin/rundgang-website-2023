import React from "react";
import styled from "styled-components";

import { NUMBER_OF_HOURS } from "@/themes/pages/timeline";
import { range } from "@/utils/range";

export default function TimelineGrid() {
  return (
    <>
      {range(2, NUMBER_OF_HOURS - 1).map(hour => {
        return (<GridLine hour={hour} key={`hour-${hour}`}/>)
      })}
    </>
  );
};

const GridLine = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: calc(${({theme}) => theme.widthPerHour} * ${({hour}) => hour});
  
  height: 100%;

  border-left: ${({theme}) => theme.grid.border};
`;
