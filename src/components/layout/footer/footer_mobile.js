import styled from "styled-components";

import FooterSlider from "@/components/layout/footer/slider";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import MobileMenu from "@/components/layout/footer/mobile_menu";

export default function FooterMobile({ numberOfSliderStates }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <FooterWrapper>
      {isActive && <MobileMenu />}
      <FooterContainer>
        <FooterSlider numberOfSliderStates={numberOfSliderStates} />
        <div onClick={() => setIsActive(!isActive)}>
          <SVG
            src={`/assets/svg/layout/arrow_${isActive ? "up" : "left"}.svg`}
          />
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterContainer = styled.div`
  /* height: var(--layout-header-bar-container-height); */

  display: grid;
  grid-template-columns: 8fr min-content;

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
  padding: 0.4rem;

  > div {
    width: 100%;
    height: 100%;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
