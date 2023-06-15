import styled from 'styled-components'

export default function ProjectAuthors ({ event }) {
  return (
    <Container>
      {
        event.authors.map(author => (
          <span>{author.name}</span>
        ))
      }
    </Container>
  )
}

const Container = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
  }

  & > *:not(:last-child):after {
    content: "/";
    padding: 0 1rem;
  }
`
