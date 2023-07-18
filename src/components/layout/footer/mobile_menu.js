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
        <HeaderBarLocalization />
      </MobileLocalizationContainer>
    </MobileMenuContainer>
  );
}

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  width: min-content;

  margin-left: auto;
  margin-right: 0;

  border: var(--border-width) solid var(--border-color);
  border-bottom: 0;

  padding: 0.5rem;

  background-color: rgb(255, 255, 255);
  backdrop-filter: blur(5px);

  font-size: 1.2rem;
  font-weight: 500;
  color: black;
  //text-transform: uppercase;

  > a {
    color: black;
  }
`;

const MobileLocalizationContainer = styled.div`
  > div {
    > div {
      color: black;
      font-size: 1.2rem;
      > div {
        > a {
          color: black;
        }
      }
    }
  }
`;
