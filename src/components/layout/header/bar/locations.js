import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { LocationsLink } from "@/components/localization/links";

export default function HeaderBarLocations() {
  const [isActive, setIsActive] = useState(false);

  return (
    <LocationsLink>
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <SVG
          src={`/assets/svg/layout/map_${isActive ? "active" : "passive"}.svg`}
        />
      </div>
    </LocationsLink>
  );
}

const SVG = styled(ReactSVG)`
  width: calc(0.6 * var(--layout-header-bar-container-height));
  height: calc(0.6 * var(--layout-header-bar-container-height));
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
