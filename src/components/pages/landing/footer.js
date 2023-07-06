import styled, { useTheme } from "styled-components";
import { FormattedMessage } from "react-intl";

import {ContactLink, ImprintLink, FaqLink, SwitchLocalizationLink} from "@/components/localization/links";
import React from "react";

export default function LandingFooter ({ setIsLinkClicked }) {
  const theme = useTheme()

  return (
    <>
      {
        theme.id === 'l' ?
          <LFooterContainer>
            <FooterContent setIsLinkClicked={setIsLinkClicked} />
          </LFooterContainer>
          :
          <MFooterContainer>
            <FooterContent setIsLinkClicked={setIsLinkClicked} />
          </MFooterContainer>
      }
    </>
  )
}

function FooterContent ({ setIsLinkClicked }) {
  const theme = useTheme()

  return (
    <>
      <FooterContainer>
        <ContactContainer>
          <ContactLink setIsLinkClicked={setIsLinkClicked}>
            <FormattedMessage id={'contact'} />
          </ContactLink>
        </ContactContainer>
        <ImprintContainer>
          <ImprintLink setIsLinkClicked={setIsLinkClicked}>
            <FormattedMessage id={'imprint'} />
          </ImprintLink>
        </ImprintContainer>
        <FaqContainer setIsLinkClicked={setIsLinkClicked}>
          <FaqLink>
            <FormattedMessage id={'faq'} />
          </FaqLink>
        </FaqContainer>
      </FooterContainer>
      {
        theme.id === 'l' ?
          <></> :
          <LocalizationContainer>
            <SwitchLocalizationLink />
          </LocalizationContainer>
      }
    </>
  )
}

function LFooterContainer ({ children }) {
  return (
    <>
      {children}
    </>
  )
}

const MFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: ${({ theme }) => theme.footer.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.s};
`


const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.footer.gridTemplateColumns};
  grid-template-rows: ${({ theme }) => theme.footer.gridTemplateRows};

  padding: ${({ theme }) => theme.footer.padding};

  font-size: ${({ theme }) => theme.footer.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.s};
  
  a {
    text-decoration: none;
    color: white;

    :hover {
      text-decoration: underline;
    }
  }
`

const ContactContainer = styled.div`
  justify-self: start;
`

const ImprintContainer = styled.div`
  justify-self: ${({ theme }) => theme.footer.imprint.justifySelf};
  padding-top: ${({ theme }) => theme.footer.imprint.paddingTop};
`

const FaqContainer = styled.div`
  justify-self: ${({ theme }) => theme.footer.faq.justifySelf};
  padding-top: ${({ theme }) => theme.footer.faq.paddingTop};
`

const LocalizationContainer = styled.div`
  justify-self: end;
  display: flex;
  align-items: end;

  padding: ${({ theme }) => theme.footer.padding};

  > a {
    color: white;
  }
`;