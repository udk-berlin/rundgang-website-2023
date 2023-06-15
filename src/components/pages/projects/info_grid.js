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
  if ("temporal" in project) {
    project.temporal.forEach((date) => {
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
      <InfoGridEvent eventType="Tanz" />
    </ProjectInfoGridContainer>
  );
}

const ProjectInfoGridContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 900px;
`;
