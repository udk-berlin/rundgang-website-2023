import React from "react";
import styled from "styled-components";

import ProjectInfoGrid from "@/components/pages/projects/project/info_grid";
import ProjectImageMedia from "@/components/pages/projects/project/media/image";
import { ProjectAdditionalMedia } from "@/components/pages/projects/project/media/image";

export default function ProjectMedia({ project, media, fullSize = true, infoGridPos }) {
  return (
    <MediaContainer>
      {infoGridPos ? <ProjectInfoGrid project={project.data} /> : <></>}
      <ProjectImageMedia project={project.data} fullSize={fullSize} />
      <ProjectAdditionalMedia project={project.data} media={media.data} />
    </MediaContainer>
  )
}

const MediaContainer = styled.div`
  display: ${({ theme }) => theme.media.display};
  flex-direction: ${({ theme }) => theme.media.flexDirection};
  position: relative;
  
  height: ${({ theme }) => theme.media.height};
  min-height: ${({ theme }) => theme.media.height};
  max-height: ${({ theme }) => theme.media.height};

  width: ${({ theme }) => theme.media.width};
  min-width: ${({ theme }) => theme.media.width};
  max-width: ${({ theme }) => theme.media.width};

  overflow-x: ${({ theme }) => theme.media.overflowX};
  overflow-y: ${({ theme }) => theme.media.overflowY};
`;