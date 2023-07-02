import styled from "styled-components";

import FooterSlider from "@/components/layout/footer/slider";
import FooterInfoPages from "@/components/layout/footer/info_pages";
import FooterTitle from "@/components/layout/footer/title";
import { ReactSVG } from "react-svg";
import { useState } from "react";

export default function FooterMobile({ numberOfSliderStates }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <FooterContainer>
      <FooterSlider numberOfSliderStates={numberOfSliderStates} />
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <SVG src={`/assets/svg/layout/${isActive ? "up" : "left"}.svg`} />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: var(--layout-header-bar-container-height);

  display: grid;
  grid-template-columns: 8fr 1fr;

  border: var(--border-width) solid var(--border-color);
  background: var(--color-white);

  > *:nth-child(1) {
    border-right: var(--border-width) solid var(--border-color);
  }

  > *:nth-child(3) {
    border-left: var(--border-width) solid var(--border-color);
  }
`;

const SVG = styled(ReactSVG)`
  width: calc(0.75 * var(--layout-header-bar-container-height));
  height: calc(0.75 * var(--layout-header-bar-container-height));
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
