import React from "react";
import styled from "styled-components";

import { SwitchLocalizationLink } from "@/components/localization/links";

export default function LandingHeader () {
  return (
    <HeaderContainer>
      <RundgangContainer>UdK Berlin Rundgang </RundgangContainer>
      <TimelineContainer>21. – 23.07.2023 </TimelineContainer>
      <LocalizationContainer>
        <SwitchLocalizationLink />
      </LocalizationContainer>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const RundgangContainer = styled.div`
  justify-self: start;
  
  font-weight: 600;
`;

const TimelineContainer = styled.div`
  justify-self: center;
`;

const LocalizationContainer = styled.div`
  justify-self: end;

  > a {
    color: white;
  }
`;
