import styled from "styled-components";

import FooterSlider from "@/components/layout/footer/slider";
import FooterInfoPages from "@/components/layout/footer/info_pages";
import FooterTitle from "@/components/layout/footer/title";

export default function Footer({ numberOfSliderStates, disableSlider = false }) {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSlider numberOfSliderStates={numberOfSliderStates} disableSlider={disableSlider} />
        <FooterTitle />
        <FooterInfoPages />
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.footer.gridTemplateColumn1} ${({ theme }) => theme.footer.gridTemplateColumn2} ${({ theme }) => theme.footer.gridTemplateColumn3};
  
  height: ${({ theme }) => theme.footer.height};
  min-height: ${({ theme }) => theme.footer.height};
  max-height: ${({ theme }) => theme.footer.height};
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  border: ${({ theme }) => theme.border};
  background: white;
`;
