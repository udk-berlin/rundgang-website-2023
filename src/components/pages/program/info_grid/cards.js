import { InfoGridCardItem } from "@/components/pages/program/info_grid/item";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export function InfoGridLocation({ project }) {
  let location = <></>;
  let level = <></>;
  let room = <></>;
  let centre = <></>;

  if (project && project["location-building"])
    location = (
      <InfoGridCardItem margin="170px">
        {project["location-building"].name}
      </InfoGridCardItem>
    );
  else if (project && project["external-location"] in project)
    location = (
      <InfoGridCardItem margin="170px">
        {project["external-location"].name}
      </InfoGridCardItem>
    );

  if (project && project["location-level"] in project)
    level = (
      <InfoGridCardItem margin="10px">
        <FormattedMessage id="floor" />
        :&nbsp;
        {project["location-level"].name}
      </InfoGridCardItem>
    );

  if (project && project["location-room"] in project)
    room = (
      <InfoGridCardItem margin="50px">
        <FormattedMessage id="room" />
        :&nbsp;{project["location-room"].name}
      </InfoGridCardItem>
    );

  if (project && project["centre"] in project)
    centre = (
      <InfoGridCardItem margin="50px">{project.centre.name}</InfoGridCardItem>
    );

  return (
    <Container>
      {location}
      {centre}
      {level}
      {room}
    </Container>
  );
}

export function InfoGridContext({ project }) {
  let faculty = <></>;
  let institute = <></>;
  let subject = <></>;
  let course = <></>;
  let clazz = <></>;

  if (project && project["faculty"] in project) {
    faculty = (
      <InfoGridCardItem margin="50px">{project.faculty.name}</InfoGridCardItem>
    );
  }

  if (project && project["institute"] in project) {
    institute = (
      <InfoGridCardItem margin="150px">
        {project.institute.name}
      </InfoGridCardItem>
    );
  }

  if (project && project["subject"] in project) {
    subject = (
      <InfoGridCardItem margin="100px">{project.subject.name}</InfoGridCardItem>
    );
  }

  if (project && project["course"] in project) {
    course = (
      <InfoGridCardItem margin="50px">{project.course.name}</InfoGridCardItem>
    );
  }

  if (project && project["class"] in project) {
    clazz = (
      <InfoGridCardItem margin="200px">{project.class.name}</InfoGridCardItem>
    );
  }

  return (
    <Container>
      {faculty}
      {institute}
      {subject}
      {course}
      {clazz}
    </Container>
  );
}

function Item({ margin, children }) {
  return (
    <ItemContainer margin={margin}>
      <div>{children}</div>
    </ItemContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-right: var(--info-border-width);
  }
`;

const ItemContainer = styled.div`
  margin-top: var(--info-border-width);
  display: inline;
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: ${(props) => props.margin};
  background-color: #fff;
  color: #000;

  & > div {
    padding: 0.2rem 0.4rem;
  }
`;
