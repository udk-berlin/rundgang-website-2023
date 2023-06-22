import React from "react";
import styled from "styled-components";

const Timeline = styled.div`
  height: 50px;
  min-height: 50px;
  border-left: 1px solid black;
  bottom: 0;
  left: ${({ x }) => x}px;
  position: absolute;
`;

const TimelineScaleContainer = styled.div`
  display: flex;
  position: relative;

  height: 50px;
  min-height: 50px;
`;

export default function TimelineScale({ scaleX, times }) {
  return (
    <TimelineScaleContainer>
      {times.map(t => (
        <Timeline x={scaleX(t)} key={`timeline-${t}`} />
      ))}
    </TimelineScaleContainer>
  );
};
