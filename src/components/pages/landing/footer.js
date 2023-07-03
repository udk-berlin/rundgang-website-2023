import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { ContactLink, ImprintLink, FaqLink } from "@/components/localization/links";

export default function LandingFooter () {
  return (
    <FooterContainer>
      <ContactContainer>
        <ContactLink>
          <FormattedMessage id={'contact'} />
        </ContactLink>
      </ContactContainer>
      <ImprintContainer>
        <ImprintLink>
          <FormattedMessage id={'imprint'} />
        </ImprintLink>
      </ImprintContainer>
      <FaqContainer>
        <FaqLink>
          <FormattedMessage id={'faq'} />
        </FaqLink>
      </FaqContainer>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  font-weight: 300;
  
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
  justify-self: center;
`

const FaqContainer = styled.div`
  justify-self: end;
`