import styled from 'styled-components'

export default function ProjectAuthors ({ fontSize = 1, authors }) {
  return (
    <Container fontSize={fontSize}>
      {authors.map((author) => (
        <span>{author}</span>
      ))}
    </Container>
  )
}

const Container = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  /* Hide scrollbar for IE, Edge and Firefox */
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
