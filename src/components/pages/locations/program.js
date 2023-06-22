import React from "react";
import styled from 'styled-components'

import ProjectCell from "@/components/pages/program/project_cell";
import { useFilter } from "@/providers/filter";

export default function LocationsProgram() {
  const filter = useFilter()

  if (!('location' in filter)) {
    return <></>
  }

  return (
    <LocationsProgramContainer>
      <LocationsProgramEmptyColumn />
      <LocationsProgramEmptyColumn />
      <LocationsProgramContentColumn>
        {Object.values(filter.filteredProjects).map(project => (<ProjectCell project={project} />))}
      </LocationsProgramContentColumn>
    </LocationsProgramContainer>
  )
}

const LocationsProgramEmptyColumn = styled.div`
  pointer-events: none;
`

const LocationsProgramContainer = styled.div`
  position: absolute;
  top: var(--locations-overlays-top);
  left: 0;
  z-index: 3;

  display: grid;
  grid-template-columns: var(--layout-footer-grid-template-columns);

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: var(--locations-map-height);
  min-height: var(--locations-map-height);
  max-height: var(--locations-map-height);

  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);

  cursor: default;
  pointer-events: none;
  
  overflow: scroll;
  
  font-size: 16px;
`

const LocationsProgramContentColumn = styled.div`
  pointer-events: all;
  overflow: scroll;
  background: var(--color-white);
  padding: var(--program-padding);
  border-left: var(--border-width) solid var(--border-color);

  display: flex;
  flex-direction: column;
  gap: var(--program-padding);
`
