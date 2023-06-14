import styled from 'styled-components'

export const HoverLink = styled.div`
  pointer-events: none;

  &:hover {
    background-color: var(--color-pink);
    color: #fff;
  }
  & > a {
    pointer-events: auto;
    display: block;
    text-align: center;
  }
`
