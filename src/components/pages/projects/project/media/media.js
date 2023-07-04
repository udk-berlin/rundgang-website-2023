import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import ProjectInfoGrid from "@/components/pages/projects/project/info_grid";
import ProjectImageMedia from "@/components/pages/projects/project/media/image";
import { ProjectAdditionalMedia } from "@/components/pages/projects/project/media/image";

export default function ProjectMedia({ project, fullSize = false, infoGridPos, data }) {

  return (
    <MediaContainer>
      {infoGridPos ? <ProjectInfoGrid project={project} /> : <></>}
      <ProjectImageMedia project={project} fullSize={true} />
      <ProjectAdditionalMedia project={project} data={data} />
    </MediaContainer>
  )
}


const MediaContainer = styled.div`
  // display: flex;
  // flex-direction: ${({ theme }) => theme.media.flexDirection};
  position: relative;
  
  height: ${({ theme }) => theme.media.height};
  min-height: ${({ theme }) => theme.media.height};
  max-height: ${({ theme }) => theme.media.height};

  width: ${({ theme }) => theme.media.width}; // 100vw
  min-width: ${({ theme }) => theme.media.width}; // 100vw
  max-width: ${({ theme }) => theme.media.width}; // 100vw

  overflow-x: ${({ theme }) => theme.media.overflowX}; // hidden
  overflow-y: ${({ theme }) => theme.media.overflowY}; // scroll
`;