import React from "react";
import styled from "styled-components";

import ProjectCell from "@/components/pages/program/project_cell";
import { useFilter } from "@/providers/filter";

export default function LocationsProgram({ setLocationSelected, responsiveTheme}) {
  const filter = useFilter();

  if (!filter.location) {
    setLocationSelected(false)
    return <></>;
  }

  if (responsiveTheme.id === 'm') {
    setLocationSelected(true)
  } else {
    setLocationSelected(false)
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
  position: ${({ theme }) => theme.program.position};
  top: ${({ theme }) => theme.program.top};
  left: ${({ theme }) => theme.program.left};
  z-index: 3;

  display: grid;
  grid-template-columns: ${({ theme }) => theme.program.gridTemplateColumns};

  width: calc(100vw - 1 * ${({ theme }) => theme.borderWidth});
  min-width: calc(100vw - 1 * ${({ theme }) => theme.borderWidth});
  max-width: calc(100vw - 1 * ${({ theme }) => theme.borderWidth});

  height: ${({ theme }) => theme.program.height};
  min-height: ${({ theme }) => theme.program.height};
  max-height: ${({ theme }) => theme.program.height};

  cursor: default;
  pointer-events: none;

  overflow: hidden;

  font-size: 16px;
`;

const LocationsProgramContentColumn = styled.div`
  pointer-events: all;
  overflow: scroll;
  background: white;
  padding: ${({ theme }) => theme.program.padding};
  border-left: ${({ theme }) => theme.program.borderLeft};

  width: ${({ theme }) => theme.program.width};
  min-width: ${({ theme }) => theme.program.width};
  max-width: ${({ theme }) => theme.program.width};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.program.padding};
`;
