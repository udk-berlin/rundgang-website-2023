import styled from "styled-components";

import FooterSlider from "@/components/layout/footer/slider";
import FooterInfoPages from "@/components/layout/footer/info_pages";
import FooterTitle from "@/components/layout/footer/title";

export default function Footer({ numberOfSliderStates, disableSlider = false }) {
  return (
    <FooterContainer>
      <FooterSlider numberOfSliderStates={numberOfSliderStates} disableSlider={disableSlider} />
      <FooterTitle />
      <FooterInfoPages />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 45px; //var(--layout-header-bar-container-height);

  display: grid;
  grid-template-columns: var(--layout-footer-grid-template-columns);
  align-items: center;

  border: var(--border-width) solid var(--border-color);
  background: var(--color-white);

  > *:nth-child(1) {
    border-right: var(--border-width) solid var(--border-color);
  }

  > *:nth-child(3) {
    border-left: var(--border-width) solid var(--border-color);
  }
`;
