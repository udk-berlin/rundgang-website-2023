import styled from "styled-components";

import ProjectInfoGridTime from "@/components/pages/program/project/info_grid/date/time";
import ProjectInfoGridDay from "@/components/pages/program/project/info_grid/date/day";

export default function ProjectInfoGridDate({ project }) {
  const dates = extractDates(project)

  return (
    <InfoGridDateContainer>
      {dates.map(date => {
        return (
          <InfoGridDateElement>
            <ProjectInfoGridDay date={date} />
            <ProjectInfoGridTime date={date} />
          </InfoGridDateElement>
        )
      })}
    </InfoGridDateContainer>
  );
}

const InfoGridDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoGridDateElement = styled.div`
  &:nth-child(1n) > :first-child > :first-child {
    visibility: hidden;
  }

  &:first-child > :first-child > :first-child {
    visibility: visible;
  }
`;

function extractDates(project) {
  const dates = []

  project && project.allocation && project.allocation.temporal && project.allocation.temporal.forEach(date => {
    dates.push({
      start: new Date(date.start * 1000 - 7200000),
      end: new Date(date.end * 1000 - 7200000),
    })
  });

  return dates
}
