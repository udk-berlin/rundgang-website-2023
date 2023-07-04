import InfoGridDay from "@/components/pages/program/info_grid/day";
import InfoGridTime from "@/components/pages/program/info_grid/time";
import styled from "styled-components";

export default function InfoGridDate({ project }) {
  let projectTimes = [];

  if (project && project.temporal) {
    project.temporal.forEach((date) => {
      projectTimes.push([
        new Date(date.start),
        new Date(date.end),
      ]);
    });
  }

  let items = projectTimes.map((projectTime) => (
    <InfoGridDateElement>
      <InfoGridDay projectTime={projectTime} />
      <InfoGridTime start={projectTime[0]} end={projectTime[1]} />
    </InfoGridDateElement>
  ));

  return (
    <InfoGridDateContainer>{items.map((item) => item)}</InfoGridDateContainer>
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
