import InfoGridItemLink, {
  InfoGridItem,
} from "@/components/pages/program/info_grid/item";
import styled from "styled-components";

export function InfoGridLocation({ project }) {
  let location = <></>;
  let level = <></>;
  let room = <></>;
  let centre = <></>;

  if ("location-building" in project)
    location = (
      <InfoGridItem margin="170px">
        {project["location-building"].name}
      </InfoGridItem>
    );
  else if ("external-location" in project)
    location = (
      <InfoGridItem margin="170px">
        {project["external-location"].name}
      </InfoGridItem>
    );

  if ("location-level" in project)
    level = (
      <InfoGridItem margin="10px">
        Etage: {project["location-level"].name}
      </InfoGridItem>
    );

  if ("location-room" in project)
    room = (
      <InfoGridItem margin="50px">
        Raum: {project["location-room"].name}
      </InfoGridItem>
    );

  if ("centre" in project)
    centre = <InfoGridItem margin="50px">{project.centre.name}</InfoGridItem>;

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

  if ("faculty" in project) {
    faculty = <InfoGridItem margin="50px">{project.faculty.name}</InfoGridItem>;
  }

  if ("institute" in project) {
    institute = (
      <InfoGridItem margin="150px">{project.institute.name}</InfoGridItem>
    );
  }

  if ("subject" in project) {
    subject = (
      <InfoGridItem margin="100px">{project.subject.name}</InfoGridItem>
    );
  }

  if ("course" in project) {
    course = <InfoGridItem margin="50px">{project.course.name}</InfoGridItem>;
  }

  if ("class" in project) {
    clazz = <InfoGridItem margin="200px">{project.class.name}</InfoGridItem>;
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
