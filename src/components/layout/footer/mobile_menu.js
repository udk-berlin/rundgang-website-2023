import HeaderBarLocalization from "@/components/layout/header/bar/localization";
import {
  ContactLink,
  FaqLink,
  ImprintLink,
  LocationsLink,
  ProgramLink,
} from "@/components/localization/links";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export default function MobileMenu() {
  return (
    <MobileMenuContainer>
      <ProgramLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="program" />
      </ProgramLink>
      <LocationsLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="locations" />
      </LocationsLink>
      <ContactLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="contact" />
      </ContactLink>
      <ImprintLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="imprint" />
      </ImprintLink>
      <FaqLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="faq" />
      </FaqLink>
      <MobileLocalization />
    </MobileMenuContainer>
  );
}

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  padding: 0.5rem;
  > a {
    color: white;
  }
  width: min-content;
  margin-left: auto;
  margin-right: 0;
  outline: var(--border-width) solid var(--border-color);
  font-weight: 500;
`;

const MobileLocalization = styled(HeaderBarLocalization)`
  > Link {
    color: white;
  }
`;
