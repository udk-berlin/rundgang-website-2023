import React from "react";
import styled from "styled-components";

import ProjectCell from "@/components/pages/program/project/cell";
import { useFilter } from "@/providers/filter";

export default function LocationsProgram() {
  const filter = useFilter();

  if (!filter.location) {
    return <></>;
  }

  return (
    <LocationsProgramContainer>
      <LocationsProgramEmptyColumn />
      <LocationsProgramEmptyColumn />
      <LocationsProgramContentColumn>
        {Object.values(filter.filteredProjects).map((project) => (
          <ProjectCell project={project} />
        ))}
      </LocationsProgramContentColumn>
    </LocationsProgramContainer>
  );
}

const LocationsProgramEmptyColumn = styled.div`
  pointer-events: none;
`;

const LocationsProgramContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  display: grid;
  grid-template-columns: ${({ theme }) => theme.program.gridTemplateColumns};

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  height: ${({ theme }) => theme.program.height};
  min-height: ${({ theme }) => theme.program.height};
  max-height: ${({ theme }) => theme.program.height};

  cursor: default;
  pointer-events: none;

  overflow: hidden;

  font-size: 16px;
`;

const LocationsProgramContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.program.padding};

  width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  min-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  max-width: ${({ theme })=> theme.groundPlan.gridTemplateColumn1};
  
  padding: ${({ theme }) => theme.program.padding};
  
  border-left: ${({ theme }) => theme.program.borderLeft};

  background: white;
  overflow: scroll;
  pointer-events: all;
`;
