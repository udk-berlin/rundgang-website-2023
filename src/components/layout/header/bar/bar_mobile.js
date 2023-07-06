import React from "react";
import styled from "styled-components";

import HeaderBarSavedProjects from "@/components/layout/header/bar/saved_projects";
import HeaderBarTimeline from "@/components/layout/header/bar/timeline";
import HeaderBarLocalization from "@/components/layout/header/bar/localization";
import HeaderBarLocations from "@/components/layout/header/bar/locations";
import HeaderBarProgram from "@/components/layout/header/bar/program";
import HeaderBarR from "@/components/layout/header/bar/r";

export default function HeaderBarMobile({ setIsLinkClicked }) {
  return (
    <HeaderBarContainer>
      <HeaderBarLeftContainer>
        <HeaderBarR setIsLinkClicked={setIsLinkClicked} />
      </HeaderBarLeftContainer>
      <HeaderBarTimeline setIsLinkClicked={setIsLinkClicked} />
      <HeaderBarRightContainer>
        <HeaderBarSavedProjects setIsLinkClicked={setIsLinkClicked} />
      </HeaderBarRightContainer>
    </HeaderBarContainer>
  );
}

const HeaderBarContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  align-items: center;

  height: var(--layout-header-bar-container-height);
  padding: 0 0.8rem;
`;

const HeaderBarLeftContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const HeaderBarRightContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
`;
