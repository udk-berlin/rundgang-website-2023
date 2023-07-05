import InfoGridDay from "@/components/pages/program/info_grid/day";
import InfoGridTime from "@/components/pages/program/info_grid/time";
import styled from "styled-components";

export default function InfoGridDate({ project }) {
  let projectTimes = [];

  if (project && project.allocation && project.allocation.temporal) {
    project.allocation.temporal.forEach((date) => {
      projectTimes.push([
        new Date(date.start),
        new Date(date.end),
      ]);
    });
  }

  return (
    <InfoGridDateContainer>
      {
        projectTimes.map((projectTime) => {
          return (
            <InfoGridDateElement>
              <InfoGridDay projectTime={projectTime} />
              <InfoGridTime start={projectTime[0]} end={projectTime[1]} />
            </InfoGridDateElement>
          )
        })
      }
    </InfoGridDateContainer>
  );
}

const InfoGridDateElement = styled.div`
  &:nth-child(1n) > :first-child > :first-child {
    visibility: hidden;
  }

  &:first-child > :first-child > :first-child {
    visibility: visible;
    /* background-color: red; */
  }
`;

const InfoGridDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
