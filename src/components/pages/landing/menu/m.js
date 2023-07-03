import { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { ReactSVG } from "react-svg";

import { LocalizedLink } from "@/components/localization/links";

const hrefMapper = {
  program: "/program",
  locations: "/locations",
  timeline: "/timeline",
  info: "/",
};

const svgMapper = {
  de: {
    program: "programm",
    timeline: "zeiten",
    locations: "orte",
    info: "info",
  },
  en: {
    program: "program",
    timeline: "timeline",
    locations: "locations",
    info: "info",
  },
};

export default function LandingMenuM({ setInfoIsActive }) {
  return (
    <MenuContainer>
      <MenuItem id={"program"} />
      <MenuItem id={"locations"} height={'3.2vh'} />
      <MenuItem id={"timeline"} height={'3.2vh'} paddingTop={'0.21rem'} />
      <MenuItem id={"info"} height={'3.2vh'} paddingTop={'0.42rem'} onClick={setInfoIsActive} />
    </MenuContainer>
  );
}
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

export function MenuItem({ id, height= '4vh', paddingTop='0', onClick = null }) {
  const [isHovered, setIsHovered] = useState(null);
  const language = useIntl();

  let svg = svgMapper.de;
  if (language.locale === "en" && "en" in svgMapper) svg = svgMapper.en;

  return (
    <MenuItemContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      isHovered={isHovered}
      height={height}
      paddingTop={paddingTop}
    >
      <LocalizedLink href={hrefMapper[id]}>
        <ReactSVG src={"/assets/svg/layout/" + svg[id] + ".svg"} />
      </LocalizedLink>
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.div`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  
  padding-top: ${({ paddingTop }) => paddingTop};
  
  div {
    height: ${({ height }) => height};
    min-height: ${({ height }) => height};
    max-height: ${({ height }) => height};
  }
  
  svg {
    height: ${({ height }) => height};
    min-height: ${({ height }) => height};
    max-height: ${({ height }) => height};
  }
  
  path {
    fill: ${({ isHovered }) => isHovered ? "white" : "none"};
    stroke: white;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;
