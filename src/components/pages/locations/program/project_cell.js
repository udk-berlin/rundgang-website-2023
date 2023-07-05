import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import {
  useSavedProjects,
  useSetSavedProjects,
} from "@/providers/saved_projects";

import ProjectLink from "@/components/pages/locations/project/link";
import ProjectImage from "@/components/pages/locations/project/media/image";
import ProjectTitle from "@/components/pages/locations/project/title";
import ProjectAuthors from "@/components/pages/locations/project/authors";
import InfoGrid from "@/components/pages/locations/program/info_grid/info_grid";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/theme";

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
        pathActive={"/assets/svg/layout/saved_active.svg"}
        pathPassive={"/assets/svg/layout/saved_passive.svg"}
        cellHovered={cellHovered}
      />
      <ProjectTitle project={project} fontSize={1} />
      <ProjectAuthors project={project} fontSize={0.7} />
      <InfoGrid project={project} />
    </ProjectCellContainer>
  );
}

export function SVGOverlay({ pathActive, pathPassive, cellHovered, project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  const savedProjects = useSavedProjects();
  const setSavedProjects = useSetSavedProjects();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize?.width]);

  const handleClick = () => {
    if (savedProjects.includes(project.id)) {
      setSavedProjects(
        savedProjects.filter((savedProject) => savedProject !== project.id)
      );
    } else {
      setSavedProjects([...savedProjects, project.id]);
    }
  };

  let svg;
  if (mobile) {
    if (!savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={pathPassive} />;
    } else if (savedProjects && savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={pathActive} />;
    }
  } else {
    if (cellHovered && !savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={pathPassive} />;
    } else if (savedProjects && savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={pathActive} />;
    }
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
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SVGOverlayContainer = styled.div``;
