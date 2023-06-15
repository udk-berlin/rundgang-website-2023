import styled from "styled-components";

export function InfoGridLocation({ project }) {
  let location = <></>;
  let level = <></>;
  let room = <></>;
  let centre = <></>;

  if ("location-building" in project)
    location = <Item margin="170px">{project["location-building"].name}</Item>;
  else if ("external-location" in project)
    location = <Item margin="170px">{project["external-location"].name}</Item>;

  if ("location-level" in project)
    level = <Item margin="10px">Etage: {project["location-level"].name}</Item>;

  if ("location-room" in project)
    room = <Item margin="50px">Raum: {project["location-room"].name}</Item>;

  if ("centre" in project)
    centre = <Item margin="50px">{project.centre.name}</Item>;

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
    faculty = <Item margin="50px">{project.faculty.name}</Item>;
  }

  if ("institute" in project) {
    institute = <Item margin="150px">{project.institute.name}</Item>;
  }

  if ("subject" in project) {
    subject = <Item margin="100px">{project.subject.name}</Item>;
  }

  if ("course" in project) {
    course = <Item margin="50px">{project.course.name}</Item>;
  }

  if ("class" in project) {
    clazz = <Item margin="200px">{project.class.name}</Item>;
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
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
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
