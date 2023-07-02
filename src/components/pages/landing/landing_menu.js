import { useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
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

export default function LandingMenu() {
  return (
    <LandingMenuContainer>
      <Column>
        <div>
          <LandingMenuItem id={"program"} />
          <Row>
            <LandingMenuItem id={"locations"} />
            <LandingMenuItem id={"timeline"} />
          </Row>
        </div>
        <LandingMenuItem id={"info"} rotate={true} />
      </Column>
    </LandingMenuContainer>
  );
}

const LandingMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  & > * {
    flex: auto;
  }
`;

const LandingMenuItemContainer = styled.div`
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "none")};
  width: 100%;
  & path {
    fill: ${(props) => (props.hover ? "#fff" : "none")};
    stroke: #fff;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
`;

export function LandingMenuItem({ id, rotate = false }) {
  const [isHovered, setIsHovered] = useState(null);
  const language = useIntl();

  let svg = svgMapper.de;
  if (language.locale === "en" && "en" in svgMapper) svg = svgMapper.en;

  console.log(svg[id]);

  return (
    <LandingMenuItemContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      hover={isHovered}
      rotate={rotate}
    >
      <LocalizedLink href={hrefMapper[id]}>
        <ReactSVG src={"assets/svg/layout/" + svg[id] + ".svg"} />
      </LocalizedLink>
    </LandingMenuItemContainer>
  );
}
