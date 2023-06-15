import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
`

const ItemWrapper = styled.div`
  margin-top: var(--info-border-width);
  display: inline;
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: ${(props) => props.margin};

  & > div {
    padding: 0.2rem 0.4rem;
  }
`

function Item ({ margin, children }) {
  return (
    <ItemWrapper margin={margin}>
      <div>{children}</div>
    </ItemWrapper>
  )
};

export function InfoGridLocation ({ event }) {
  let location = <></>
  let level = <></>
  let room = <></>
  let centre = <></>

  if ('location-building' in event)
    location = <Item margin="170px">{event['location-building'].name}</Item>
  else if ('external-location' in event)
    location = <Item margin="170px">{event['external-location'].name}</Item>

  if ('location-level' in event)
    level = <Item margin="10px">Etage: {event['location-level'].name}</Item>

  if ('location-room' in event)
    room = <Item margin="50px">Raum: {event['location-room'].name}</Item>

  if ('centre' in event)
    centre = <Item margin="50px">{event.centre.name}</Item>

  return (
    <Container>
      {location}
      {centre}
      {level}
      {room}
    </Container>
  )
}

export function InfoGridContext ({ event }) {
  let faculty = <></>
  let institute = <></>
  let subject = <></>
  let course = <></>
  let clazz = <></>

  if ('faculty' in event) {
    faculty = <Item margin="50px">{event.faculty.name}</Item>
  }

  if ('institute' in event) {
    institute = <Item margin="150px">{event.institute.name}</Item>
  }

  if ('subject' in event) {
    subject = <Item margin="100px">{event.subject.name}</Item>
  }

  if ('course' in event) {
    course = <Item margin="50px">{event.course.name}</Item>
  }

  if ('class' in event) {
    clazz = <Item margin="200px">{event.class.name}</Item>
  }

  return (
    <Container>
      {faculty}
      {institute}
      {subject}
      {course}
      {clazz}
    </Container>
  )
}
