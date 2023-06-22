import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { HoverLink } from "@/components/hover_link";
import FooterSlider from "@/components/layout/footer/slider";

import {
  ContactLink,
  ImprintLink,
  FaqLink,
} from "@/components/localization/links";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSlider />
      <Title />
      <InfoPages />
    </FooterContainer>
  );
}

function Title() {
  return (
    <TitleContainer>
      <HoverLink href="/program">UdK Berlin Rundgang</HoverLink>
    </TitleContainer>
  );
}

function InfoPages() {
  return (
    <InfoPagesContainer>
      <ContactLink>
        <FormattedMessage id={"contact"} />
      </ContactLink>
      <ImprintLink>
        <FormattedMessage id={"imprint"} />
      </ImprintLink>
      <FaqLink>
        <FormattedMessage id={"faq"} />
      </FaqLink>
    </InfoPagesContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: var(--layout-header-bar-container-height);

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

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;

    > a {
      width: 100% !important;
      height: 100% !important;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 600;
      font-size: 1.2rem;
    }
  }
`;

const InfoPagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;

  & > *:hover {
    text-decoration: underline;
  }
`;
