import React from "react";
import styled from 'styled-components'

import { useFilter, useFilterDispatch } from "@/providers/filter";
import LocationsMobileGroundPlanContent from "@/components/pages/locations/mobile/ground_plan/content";
import LocationsMobileProgram from "@/components/pages/locations/mobile/program";
import {useData} from "@/providers/data/data";

export default function LocationsMobileGroundPlan() {
  const { projects, locations } = useData()
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  if (!(filter.location)) {
    return <></>
  }

  return (
    <GroundPlanContainer>
      <EmptyColumn onClick={() => dispatch({type: 'all-locations', projects: projects, locations: locations})} />
      <ContentColumn>
        <LocationsMobileGroundPlanContent />
        <LocationsMobileProgram />
      </ContentColumn>
    </GroundPlanContainer>
  )
}

const EmptyColumn = styled.div`
  height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
  min-height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
  max-height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
`

const GroundPlanContainer = styled.div`
  position: absolute;
  z-index: 0;

  height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  min-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  max-height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height});
  
  overflow: scroll;
  
  cursor: default;
  pointer-events: all;
  
  font-size: 16px;
`

const ContentColumn = styled.div`
  height: fit-content;

  width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});
  min-width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});
  max-width: calc(100vw - 0 * ${({ theme }) => theme.borderWidth});

  // height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
  // min-height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
  // max-height: calc(calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) => theme.footer.height}) / 2);
  
  //overflow-x: visible;
  
  background: white;
`
