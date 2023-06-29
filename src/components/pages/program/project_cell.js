import styled from "styled-components";

import ProjectLink from "@/components/pages/projects/project/link";
import ProjectTitle from "@/components/pages/projects/project/title";
import ProjectAuthors from "@/components/pages/projects/project/authors";
import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import ProjectImage from "@/components/pages/projects/project/image";
import { ReactSVG } from "react-svg";
import { useState } from "react";

export default function ProjectCell({ key, project }) {
  const [isSaved, setIsSaved] = useState(false);
  const [cellHovered, setCellHovered] = useState(false);
  return (
    <ProjectCellContainer
      key={key}
      onMouseEnter={() => setCellHovered(true)}
      onMouseLeave={() => setCellHovered(false)}
    >
      <ProjectLink project={project}>
        <ProjectImage project={project} />
      </ProjectLink>
      <SVGOverlay
        isSaved={isSaved}
        setIsSaved={setIsSaved}
        pathActive={"/assets/svg/layout/shop_active.svg"}
        pathPassive={"/assets/svg/layout/shop_passive.svg"}
        pathHover={"/assets/svg/layout/shop_hover.svg"}
        cellHovered={cellHovered}
      />
      <ProjectTitle project={project} fontSize={1.3} />
      <ProjectAuthors project={project} fontSize={0.8} />
      <InfoGrid project={project} />
    </ProjectCellContainer>
  );
}

export function SVGOverlay({
  isSaved,
  setIsSaved,
  pathActive,
  pathPassive,
  pathHover,
  cellHovered,
}) {
  const [isHovered, setIsHovered] = useState(false);
  let svg;
  if (cellHovered && !isHovered && !isSaved) {
    svg = <SVGHOverlay src={pathPassive} />;
  } else if (cellHovered && isHovered && !isSaved) {
    svg = <SVGHOverlay src={pathHover} />;
  } else if (isSaved) {
    svg = <SVGHOverlay src={pathHover} />;
  }
  return (
    <SVGOverlayContainer
      onClick={() => setIsSaved(!isSaved)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {svg}
    </SVGOverlayContainer>
  );
}

const ProjectCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > * {
    width: 100%;
  }
`;

const SVGHOverlay = styled(ReactSVG)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  & polyline {
  }
`;

const SVGOverlayContainer = styled.div``;
