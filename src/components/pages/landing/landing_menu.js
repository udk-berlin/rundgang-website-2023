import { useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

import { LocalizedLink, ProgramLink, LocationsLink, TimelineLink } from "@/components/localization/links";

export default function LandingMenu() {
  return (
    <LandingMenuContainer>
      <MainMenuContainer>
        <Program />
        <MainMenuInnerContainer>
          <Locations />
          <Timeline />
        </MainMenuInnerContainer>
      </MainMenuContainer>
      <InfoMenuContainer>
        <Info />
      </InfoMenuContainer>
    </LandingMenuContainer>
  );
}

const LandingMenuContainer = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const MainMenuContainer = styled.div`
  height: 16vw;
  min-height: 16vw;
  max-height: 16vw;
  
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const MainMenuInnerContainer = styled.div`
  height: 8vw;
  min-height: 8vw;
  max-height: 8vw;
  
  display: flex;
  flex-direction: row;
  gap:  var(--landing-menu-gap-de);
  
  margin-top: -10px;
`;

const InfoMenuContainer = styled.div`
  height: 16vw;
  min-height: 16vw;
  max-height: 16vw;
`;

export function Program() {
  const [isHovered, setIsHovered] = useState(false);
  const language = useIntl();

  let filename = 'programm';
  if (language.locale === "en") filename = 'program';

  return (
    <ProgramContainer isHovered={isHovered}>
      <ProgramLink>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </ProgramLink>
    </ProgramContainer>
  );
}

const ProgramContainer = styled.div`
  height: var(--landing-main-program-height-de);
  min-height: var(--landing-main-program-height-de);
  max-height: var(--landing-main-program-height-de);
  
  > a {
    > div {
      height: var(--landing-main-program-height-de);
      min-height: var(--landing-main-program-height-de);
      max-height: var(--landing-main-program-height-de);

      > div {
        height: var(--landing-main-program-height-de);
        min-height: var(--landing-main-program-height-de);
        max-height: var(--landing-main-program-height-de);

        > svg {
          height: var(--landing-main-program-height-de);
          min-height: var(--landing-main-program-height-de);
          max-height: var(--landing-main-program-height-de);
        }
      }
    }
  }
  
  & path {
    fill: ${({ isHovered }) => (isHovered ? "#fff" : "none")};
    stroke: #fff;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;

export function Locations() {
  const [isHovered, setIsHovered] = useState(false);
  const language = useIntl();

  let filename = 'orte';
  if (language.locale === "en") filename = 'locations';

  return (
    <LocationsContainer isHovered={isHovered}>
      <LocationsLink>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </LocationsLink>
    </LocationsContainer>
  );
}

const LocationsContainer = styled.div`
  height: var(--landing-main-menu-height-de);
  min-height: var(--landing-main-menu-height-de);
  max-height: var(--landing-main-menu-height-de);
  
  margin-top: var(--landing-menu-locations-margin-top-de);
  
  > a {
    > div {
      height: var(--landing-main-menu-height-de);
      min-height: var(--landing-main-menu-height-de);
      max-height: var(--landing-main-menu-height-de);

      > div {
        height: var(--landing-main-menu-height-de);
        min-height: var(--landing-main-menu-height-de);
        max-height: var(--landing-main-menu-height-de);
        
        > svg {
          height: var(--landing-main-menu-height-de);
          min-height: var(--landing-main-menu-height-de);
          max-height: var(--landing-main-menu-height-de);
        }
      }
    } 
  }
  
  & path {
    fill: ${({ isHovered }) => (isHovered ? "#fff" : "none")};
    stroke: #fff;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;

export function Timeline() {
  const [isHovered, setIsHovered] = useState(false);
  const language = useIntl();

  let filename = 'zeiten';
  if (language.locale === "en") filename = 'timeline';

  return (
    <TimelineContainer isHovered={isHovered}>
      <TimelineLink>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </TimelineLink>
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  height: var(--landing-main-menu-height-de);
  min-height: var(--landing-main-menu-height-de);
  max-height: var(--landing-main-menu-height-de);
  
  > a {
    > div {
      height: var(--landing-main-menu-height-de);
      min-height: var(--landing-main-menu-height-de);
      max-height: var(--landing-main-menu-height-de);

      > div {
        height: var(--landing-main-menu-height-de);
        min-height: var(--landing-main-menu-height-de);
        max-height: var(--landing-main-menu-height-de);

        > svg {
          height: var(--landing-main-menu-height-de);
          min-height: var(--landing-main-menu-height-de);
          max-height: var(--landing-main-menu-height-de);
        }
      }
    }
  }
  
  & path {
    fill: ${({ isHovered }) => (isHovered ? "#fff" : "none")};
    stroke: #fff;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;

export function Info() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <InfoContainer isHovered={isHovered}>
      <LocalizedLink href={'/'}>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={"assets/svg/layout/info_rotated.svg"} />
      </LocalizedLink>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  height: var(--landing-info-height-de);
  min-height: var(--landing-info-height-de);
  max-height: var(--landing-info-height-de);
  
  overflow: visible;
  
  > a {
    > div {
      height: var(--landing-info-height-de);
      min-height: var(--landing-info-height-de);
      max-height: var(--landing-info-height-de);

      > div {
        height: var(--landing-info-height-de);
        min-height: var(--landing-info-height-de);
        max-height: var(--landing-info-height-de);

        > svg {
          height: var(--landing-info-height-de);
          min-height: var(--landing-info-height-de);
          max-height: var(--landing-info-height-de);

          margin-left: var(--landing-menu-info-margin-left-de);
          padding: var(--landing-menu-info-padding-de);

          vector-effect: non-scaling-stroke;

          > * {
            vector-effect: non-scaling-stroke;
          }
        }
      }
    } 
  }
  
  & path {
    fill: ${({ isHovered }) => (isHovered ? "#fff" : "none")};
    stroke: #fff;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;