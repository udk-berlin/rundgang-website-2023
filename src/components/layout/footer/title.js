import styled from "styled-components";

import { HoverLink } from "@/components/hover_link";

export default function FooterTitle({ setIsLinkClicked }) {
  return (
    <TitleContainer>
      <HoverLink setIsLinkClicked={setIsLinkClicked} href="/">UdK Berlin Rundgang</HoverLink>
    </TitleContainer>
  );
}

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
      font-size: 1rem;
    }
  }
`;
