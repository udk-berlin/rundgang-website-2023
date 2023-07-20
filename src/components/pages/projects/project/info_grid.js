import styled from "styled-components";

import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import InfoGridFormat from "@/components/pages/program/info_grid/format";
import { InfoGridContainer } from "@/components/pages/program/info_grid/info_grid";

export default function ProjectInfoGrid({ project, forProjectPage = false, asOverlay = false }) {

  return (
    <ProjectInfoGridContainer>
      <FormatDateContainer>
        <InfoGridFormat project={project} forProjectPage={forProjectPage} asOverlay={asOverlay} />
        <InfoGridDate project={project} />
      </FormatDateContainer>
      <InfoGridLocation project={project} forProjectPage={forProjectPage} />
      <InfoGridContext project={project} forProjectPage={forProjectPage} />
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
