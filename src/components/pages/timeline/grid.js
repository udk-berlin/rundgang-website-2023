import React from "react";
import styled from "styled-components";

const RUNDGANG_HOURS = [
  1658566800, 1658570400, 1658574000, 1658577600, 1658581200, 1658584800,
  1658588400, 1658592000, 1658595600, 1658599200, 1658602800, 1658606400,
  1658610000, 1658613600, 1658617200, 1658620800, 1658624400, 1658628000,
  1658631600, 1658635200, 1658638800, 1658642400, 1658646000, 1658649600,
  1658653200, 1658656800, 1658660400, 1658664000, 1658667600, 1658671200,
  1658674800, 1658678400, 1658682000, 1658685600, 1658689200, 1658692800,
  1658696400,
];

export default function TimelineGrid({ scaleX }) {
  return (
    <>
      {RUNDGANG_HOURS.map(hour => (
        <Timeline x={scaleX(hour)} key={`timeline-${hour}`} />
      ))}
    </>
  );
};

const Timeline = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: ${({ x }) => x}px;
  
  height: 100%;
  
  border-left: 1px solid black;
`;