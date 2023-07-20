import styled from "styled-components";


import ProjectInfoGridLocations from "@/components/pages/program/project/info_grid/locations";

import ProjectInfoGridDate from "@/components/pages/program/project/info_grid/date/date";
import ProjectInfoGridFormats from "@/components/pages/program/project/info_grid/formats";

import { InfoGridContainer } from "@/components/pages/program/project/info_grid/info_grid";
import ProjectInfoGridStructures from "@/components/pages/program/project/info_grid/structures";

export default function ProjectInfoGrid({ project, forProjectPage = false, asOverlay = false }) {

  return (
    <ProjectInfoGridContainer>
      <FormatDateContainer>
        <ProjectInfoGridFormats project={project} forProjectPage={forProjectPage} asOverlay={asOverlay} />
        <ProjectInfoGridDate project={project} />
      </FormatDateContainer>
      <ProjectInfoGridLocations project={project} forProjectPage={forProjectPage} />
      <ProjectInfoGridStructures project={project} forProjectPage={forProjectPage} />
    </ProjectInfoGridContainer>
  );
}

const ProjectInfoGridContainer = styled(InfoGridContainer)`
  position: fixed;
  top:  ${({ theme }) => theme.header.height};
  left: 0;
  
  display: flex;
  align-items: start;

  width: ${({ theme }) => theme.media.width};
  min-width: ${({ theme }) => theme.media.width};
  max-width: ${({ theme }) => theme.media.width};
  
  padding: 1.5rem 1rem;

  cursor: default;

  & > * {
    flex: 0 0 33%;
  }

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;

const FormatDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  :first-child {
    align-items: start;
  }

  & > :nth-child(2) {
    width: 100%;
  }
`;
