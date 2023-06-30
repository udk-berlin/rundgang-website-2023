import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { SavedProjectsLink } from '@/components/localization/links'
import { useSavedProjects } from '@/providers/saved_projects'

export default function HeaderBarSavedProjects() {
  const savedProjects = useSavedProjects()
  const numberOfSavedProjects = savedProjects ? savedProjects.length : 0
  const numberOfSavedProjectsForPath = !savedProjects ? 0 : savedProjects.length <= 3 ? savedProjects.length : 3
  const [isActive, setIsActive] = useState(false);

  return (
    <SavedProjectsContainer>
      <SavedProjectsLink>
        <NumberOfSavedProjectsContainer>{numberOfSavedProjects}</NumberOfSavedProjectsContainer>
      </SavedProjectsLink>
      <SavedProjectsSVGContainer numberOfSavedProjects={numberOfSavedProjects}>
        <SavedProjectsLink>
          <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <SVG src={`/assets/svg/layout/shop_state_${numberOfSavedProjectsForPath}${isActive && numberOfSavedProjectsForPath > 0 ? '_active' : ''}.svg`}/>
          </div>
        </SavedProjectsLink>
      </SavedProjectsSVGContainer>
    </SavedProjectsContainer>
  );
}

const SavedProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    flex-grow: 1;
  }
`;

const NumberOfSavedProjectsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 8px;
`;

const numberOfSavedProjectsToMarginTopMapper = {
  0: 0.42,
  1: 0.30,
  2: 0.18,
  3: 0.06,
}

const SavedProjectsSVGContainer = styled.div`
  margin-top: calc(0.8 * var(--layout-header-bar-container-height) * ${({ numberOfSavedProjects }) => numberOfSavedProjects in numberOfSavedProjectsToMarginTopMapper ? numberOfSavedProjectsToMarginTopMapper[numberOfSavedProjects] : numberOfSavedProjectsToMarginTopMapper[3]} * -1);
`;

const SVG = styled(ReactSVG)`
  width: calc(0.8 * var(--layout-header-bar-container-height));
  height: calc(0.8 * var(--layout-header-bar-container-height));
  cursor: pointer;
  
  > div {
    width: 100%;
    height: 100%;
    
    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
