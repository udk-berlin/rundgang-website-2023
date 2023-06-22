import React, { useState, useEffect } from 'react'
import styled from "styled-components";


export default function TimelineProjectsBar({ project= null, top, start, end, children = false }) {
  const [topMargin, setTopMargin] = useState(0);

  useEffect(() => {
    let previous =
      top > 0 ? document.getElementById(`${start}-${top - 1}`) : null;
    if (previous) {
      setTopMargin(previous.clientHeight + 4);
    }
  }, [top]);

  const title = project?.name
  return (
    <TimelineProjectsBarContainer
      id={'start-top'}
      start={start}
      end={end}
      top={topMargin}
      title={project?.name}
      color={children ? "#E2FF5D" : "#d9d9d9"}
    >
      {children ?? title}
    </TimelineProjectsBarContainer>
  );
};


const TimelineProjectsBarContainer = styled.div`
  position: relative;
  left: ${({ start }) => `${start + 2}px`};
  width: ${({ start, end }) => `${end - start - 3}px`};
  font-size: 16px;
  background: ${(props) => props.color};
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
  text-overflow: ellipsis;
  padding: 0 6px;
  top: ${({ top }) => top}px;
  
  &:hover {
    background: #000;
    color: #E2FF5D;
  }
`;


