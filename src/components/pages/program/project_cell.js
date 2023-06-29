import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { useSavedProjects, useSetSavedProjects } from '@/providers/projects/saved'

import ProjectLink from "@/components/pages/projects/project/link";
import ProjectImage from "@/components/pages/projects/project/image";
import ProjectTitle from "@/components/pages/projects/project/title";
import ProjectAuthors from "@/components/pages/projects/project/authors";
import InfoGrid from "@/components/pages/program/info_grid/info_grid";

export default function ProjectCell({ key, project }) {
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
        project={project}
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
  pathActive,
  pathPassive,
  pathHover,
  cellHovered,
  project
}) {
  const [isHovered, setIsHovered] = useState(false);
  const savedProjects = useSavedProjects()
  const setSavedProjects = useSetSavedProjects()

  const handleClick =  () => {
    if (savedProjects.includes(project.id)) {
      setSavedProjects(savedProjects.filter(savedProject => savedProject !== project.id))
    } else {
      setSavedProjects([...savedProjects, project.id])
    }
  }

  let svg;
  if (cellHovered && !isHovered && !savedProjects.includes(project.id)) {
    svg = <SVGHOverlay src={pathPassive} />;
  } else if (cellHovered && isHovered && !savedProjects.includes(project.id)) {
    svg = <SVGHOverlay src={pathHover} />;
  } else if (savedProjects && savedProjects.includes(project.id)) {
    svg = <SVGHOverlay src={pathHover} />;
  }

  return (
    <SVGOverlayContainer
      onClick={handleClick}
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
