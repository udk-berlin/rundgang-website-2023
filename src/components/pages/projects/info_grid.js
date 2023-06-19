import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import InfoGridEvent from "@/components/pages/program/info_grid/event";
import { InfoGridContainer } from "@/components/pages/program/info_grid/info_grid";
import styled from "styled-components";

export default function ProjectInfoGrid({ project }) {
  return (
    <ProjectInfoGridContainer>
      <ProjectInfoGridEventDateContainer>
        <InfoGridEvent eventType="Tanz" />
        <InfoGridDate project={project} />
      </ProjectInfoGridEventDateContainer>
      <InfoGridLocation project={project} />
      <InfoGridContext project={project} />
    </ProjectInfoGridContainer>
  );
}

const ProjectInfoGridContainer = styled(InfoGridContainer)`
  display: flex;
  align-items: start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 1rem;
  cursor: default;

  & > * {
    flex: 1;
  }

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;

const ProjectInfoGridEventDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:first-child {
    align-items: start;
  }

  & > :nth-child(2) {
    width: 100%;
  }
`;
