import React from "react";
import styled from "styled-components";

import ProjectCell from "@/components/pages/program/project/cell";
import { useFilter } from "@/providers/filter";

export default function LocationsMobileProgram() {
  const filter = useFilter();

  if (!filter.location) {
    return <></>;
  }

  return (
    <LocationsProgramContainer>
      {Object.values(filter.filteredProjects).map((project) => (
        <ProjectCell project={project} />
      ))}
    </LocationsProgramContainer>
  );
}

const LocationsProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.program.padding};

  padding: ${({ theme }) => theme.program.padding};

  background: white;

  font-size: 16px;

  overflow: scroll;
  
  cursor: default;
  pointer-events: all;
`;
