import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { ProgramLink } from "@/components/localization/links";

export default function HeaderBarProgram() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ProgramLink>
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <SVG src={`/assets/svg/layout/pro_${isActive ? 'active' : 'passive'}_1.svg`} />
      </div>
    </ProgramLink>
  );
}

const SVG = styled(ReactSVG)`
  width: calc(0.72 * var(--layout-header-bar-container-height));
  height: calc(0.72 * var(--layout-header-bar-container-height));
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
