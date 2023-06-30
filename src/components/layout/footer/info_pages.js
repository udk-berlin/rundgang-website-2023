import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { ContactLink, ImprintLink, FaqLink } from "@/components/localization/links";

export default function FooterInfoPages () {
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
