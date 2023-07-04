import HeaderBarLocalization from "@/components/layout/header/bar/localization";
import {
  ContactLink,
  FaqLink,
  ImprintLink,
  LocationsLink,
  ProgramLink,
  TimelineLink,
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
      <TimelineLink>
        <span>&rarr;&nbsp;</span>
        <FormattedMessage id="timeline" />
      </TimelineLink>
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
      <MobileLocalizationContainer>
        <HeaderBarLocalization/>
      </MobileLocalizationContainer>
    </MobileMenuContainer>
  );
}

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.5rem;
  
  > a {
    color: white;
  }
  width: min-content;
  margin-left: auto;
  margin-right: 0;
  border: var(--border-width) solid var(--border-color);
  
  font-weight: 500;
`;

const MobileLocalizationContainer = styled.div`
  > div {
    > div {
      color: white;
      > div {
        > a {
          color: white;
        } 
      } 
    }
  }
`;
