import styled from 'styled-components'

import InfoGridDate from '@/components/pages/program/info_grid_date'
import InfoGridTime from '@/components/pages/program/info_grid_time'
import InfoGridEvent from '@/components/pages/program/info_grid_event'
import {
  InfoGridContext,
  InfoGridLocation
} from '@/components/pages/program/info_grid_cards'
import InfoGridCarousel from '@/components/pages/program/info_grid_carousel'

const Container = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: 500;

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`

export default function InfoGrid () {
  return (
    <Container>
      <InfoGridEvent eventType="Beratungsangebot" />
      <InfoGridCarousel>
        <div>
          <InfoGridDate start="1686912397" />
          <InfoGridTime start="1658595600" end="1658596800" />
        </div>
        <InfoGridLocation />
        <InfoGridContext />
      </InfoGridCarousel>
    </Container>
  )
}
