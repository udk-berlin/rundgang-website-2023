import styled from "styled-components";

import FooterSlider from "@/components/layout/footer/slider";
import FooterInfoPages from "@/components/layout/footer/info_pages";
import FooterTitle from "@/components/layout/footer/title";

export default function Footer({ numberOfSliderStates, disableSlider = false, setIsLinkClicked }) {
  return (
    <FooterContainer>
      <FooterSlider numberOfSliderStates={numberOfSliderStates} disableSlider={disableSlider} />
      <FooterTitle setIsLinkClicked={setIsLinkClicked}/>
      <FooterInfoPages setIsLinkClicked={setIsLinkClicked}/>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: ${({ theme }) => theme.footer.height};

  display: grid;
  grid-template-columns: ${({ theme }) => theme.footer.gridTemplateColumn1} ${({ theme }) => theme.footer.gridTemplateColumn2} ${({ theme }) => theme.footer.gridTemplateColumn3};
  align-items: center;

  border: ${({ theme }) => theme.border};
  background: white;

  > *:nth-child(1) {
    border-right: ${({ theme }) => theme.border};
  }

  > *:nth-child(3) {
    border-left: ${({ theme }) => theme.border};
  }
`;
