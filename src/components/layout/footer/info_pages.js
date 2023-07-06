import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import {
  ContactLink,
  ImprintLink,
  FaqLink,
} from "@/components/localization/links";

export default function FooterInfoPages({ setIsLinkClicked }) {
  return (
    <InfoPagesContainer>
      <ContactLink setIsLinkClicked={setIsLinkClicked}>
        <FormattedMessage id={"contact"} />
      </ContactLink>
      <ImprintLink setIsLinkClicked={setIsLinkClicked}>
        <FormattedMessage id={"imprint"} />
      </ImprintLink>
      <FaqLink setIsLinkClicked={setIsLinkClicked}>
        <FormattedMessage id={"faq"} />
      </FaqLink>
    </InfoPagesContainer>
  );
}

const InfoPagesContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
    theme.footer.infoPages.gridTemplateColumns};
  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;

  font-size: 0.85rem;

  & > *:hover {
    text-decoration: underline;
  }
`;
