import React from "react";
import styled, { useTheme } from "styled-components";

import { SwitchLocalizationLink } from "@/components/localization/links";

export default function LandingHeader () {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <TitleContainer>UdK Berlin Rundgang </TitleContainer>
      <TimelineContainer>21. – 23.07.2023 </TimelineContainer>
      {
        theme.id === 'l' ?
          <LocalizationContainer>
            <SwitchLocalizationLink />
          </LocalizationContainer> :
          <></>
      }
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.header.gridTemplateColumns};
  grid-template-rows: ${({ theme }) => theme.header.gridTemplateRows};
  
  padding: ${({ theme }) => theme.header.padding};
`;

const TitleContainer = styled.div`
  justify-self: start;
  
  font-size: ${({ theme }) => theme.header.fontSize};
  font-weight: 600;
`;

const TimelineContainer = styled.div`
  justify-self: ${({ theme }) => theme.header.timeline.justifySelf};
  font-size: ${({ theme }) => theme.header.fontSize};
`;

const LocalizationContainer = styled.div`
  justify-self:end;

  > a {
    color: white;
  }
`;
