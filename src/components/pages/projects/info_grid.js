import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import InfoGridEvent from "@/components/pages/program/info_grid/event";
import InfoGridTime from "@/components/pages/program/info_grid/time";
import styled from "styled-components";

export default function ProjectInfoGrid(project) {
  let projectTimes = [];

  if ("temporal" in project.project) {
    project.project.temporal.forEach((date) => {
      projectTimes.push(
        <div>
          <InfoGridDate start={date.start} />
          <InfoGridTime start={date.start} end={date.end} />
        </div>
      );
    });
  }
  return (
    <ProjectInfoGridContainer>
      {projectTimes.map((projectTime) => projectTime)}
      <InfoGridLocation project={project.project} />
      <InfoGridContext project={project.project} />
    </ProjectInfoGridContainer>
  );
}

const ProjectInfoGridContainer = styled.div`
  display: flex;
  align-items: start;
  position: absolute;
  top: 40px;
  left: 20px;
  /* width: 900px; */

  font-size: 0.7rem;
  font-weight: 500;

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;
