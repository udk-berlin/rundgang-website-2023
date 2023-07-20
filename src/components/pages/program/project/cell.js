import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import {
  useSavedProjects,
  useSetSavedProjects,
} from "@/providers/saved_projects";

import ProjectLink from "@/components/pages/projects/project/link";
import { ProjectThumbnail } from "@/components/pages/projects/project/media";
import ProjectTitle from "@/components/pages/projects/project/title";
import ProjectAuthors from "@/components/pages/projects/project/authors";
import { useWindowSize } from "@/providers/window_size";
import { breakpoints } from "@/themes/theme";
import ProjectInfoGrid from "@/components/pages/program/project/info_grid/info_grid";

const SAVED_ACTIVE = "/assets/svg/layout/saved_active.svg"
const SAVED_PASSIVE = "/assets/svg/layout/saved_passive.svg"

export default function ProgramProjectCell({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectCellContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <ProjectLink project={project}>
        <ProjectThumbnail project={project} index={index} />
      </ProjectLink>
      <ProjectSavedOverlay project={project} isHovered={isHovered} setIsHovered={setIsHovered}/>

      <ProjectTitle project={project} fontSize={1} />
      <ProjectAuthors project={project} fontSize={0.7} />
      <ProjectInfoGrid project={project} />
    </ProjectCellContainer>
  )
}

function ProjectSavedOverlay({ project, isHovered, setIsHovered }) {
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
      svg = <SVGHOverlay src={SAVED_PASSIVE} />;
    } else if (savedProjects && savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={SAVED_ACTIVE} />;
    }
  } else {
    if (isHovered && !savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={SAVED_PASSIVE} />;
    } else if (savedProjects && savedProjects.includes(project.id)) {
      svg = <SVGHOverlay src={SAVED_ACTIVE} />;
    }
  }

  return (
    <div onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {svg}
    </div>
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
  top: 0;
  right: 0;
  
  width: 40px;
  height: 40px;
  
  cursor: pointer;
`;

