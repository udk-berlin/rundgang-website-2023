import { useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

import { LocalizedLink } from "@/components/localization/links";

export default function LandingMenu() {
  return (
    <LandingMenuContainer>
      <MainMenu>
        <Program />
        <Row>
          <Locations />
          <Timeline />
        </Row>
      </MainMenu>
      <InfoMenu>
        <Info />
      </InfoMenu>
    </LandingMenuContainer>
  );
}

const MainMenu = styled.div`
  height: 16vw;
  min-height: 16vw;
  max-height: 16vw;
  
  //display: flex;

  display: grid;
  grid-template-rows: 1fr 1fr;
  //width: calc(82vw + 3rem);
  //min-width: calc(82vw + 3rem);
  //max-width: calc(82vw + 3rem);
`;

const InfoMenu = styled.div`
  height: 16vw;
  min-height: 16vw;
  max-height: 16vw;
  //width: calc(100vw - 2 * 1rem - 82vw - 3rem);
  //min-width: calc(100vw - 2 * 1rem - 82vw - 3rem);
  //max-width: calc(100vw - 2 * 1rem - 82vw - 3rem);
`;

const LandingMenuContainer = styled.div`
  display: flex;
  align-items: center;
  //grid-template-columns: 8fr 1fr;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const Row = styled.div`
  height: 8vw;
  min-height: 8vw;
  max-height: 8vw;
  
  display: flex;
  flex-direction: row;
  gap: 3rem;
  
  margin-top: -10px;
`;

export function Program() {
  const [isHovered, setIsHovered] = useState(false);
  const language = useIntl();

  let filename = 'programm';
  if (language.locale === "en") filename = 'program';

  return (
    <ProgramContainer isHovered={isHovered}>
      <LocalizedLink href={'/program'}>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </LocalizedLink>
    </ProgramContainer>
  );
}

const ProgramContainer = styled.div`
  height: 10vw;
  min-height: 10vw;
  max-height: 10vw;
  
  > a {
    > div {
      height: 10vw;
      min-height: 10vw;
      max-height: 10vw;

      > div {
        height: 10vw;
        min-height: 10vw;
        max-height: 10vw;

        > svg {
          height: 10vw;
          min-height: 10vw;
          max-height: 10vw;
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
      <LocalizedLink href={'/locations'}>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </LocalizedLink>
    </LocationsContainer>
  );
}

const LocationsContainer = styled.div`
  height: 6vw;
  min-height: 6vw;
  max-height: 6vw;
  
  > a {
    > div {
      height: 6vw;
      min-height: 6vw;
      max-height: 6vw;

      > div {
        height: 6vw;
        min-height: 6vw;
        max-height: 6vw;

        > svg {
          height: 6vw;
          min-height: 6vw;
          max-height: 6vw;
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
      <LocalizedLink href={'/timeline'}>
        <ReactSVG
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={`assets/svg/layout/${filename}.svg`} />
      </LocalizedLink>
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  height: 6vw;
  min-height: 6vw;
  max-height: 6vw;
  
  > a {
    > div {
      height: 6vw;
      min-height: 6vw;
      max-height: 6vw;

      > div {
        height: 6vw;
        min-height: 6vw;
        max-height: 6vw;

        > svg {
          height: 6vw;
          min-height: 6vw;
          max-height: 6vw;
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
  //margin-top: 10px;
  //margin-right: -10px;
  padding: 1.9vw 0 0.8vw 0;
  
  height: 16vw;
  min-height: 16vw;
  max-height: 16vw;
  
  overflow: visible;
  
  > a {
    > div {
      height: 100%;
      min-height: 100%;
      max-height: 100%;

      > div {
        height: 100%;
        min-height: 100%;
        max-height: 100%;

        > svg {
          height: 100%;
          min-height: 100%;
          max-height: 100%;

          margin-left: -110px;
          //width: 8vw;

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