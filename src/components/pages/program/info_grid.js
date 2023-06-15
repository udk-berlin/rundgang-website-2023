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

export default function InfoGrid ({ event }) {
  let eventTimes = []

  if ('temporal' in event) {
    event.temporal.forEach(date => {
      eventTimes.push((
        <div>
          <InfoGridDate start={date.start}/>
          <InfoGridTime start={date.start} end={date.end}/>
        </div>
      ))
    })
  }

  return (
    <Container>
      <InfoGridEvent eventType="Beratungsangebot" />
      <InfoGridCarousel>
        {eventTimes.map(eventTime => eventTime)}
        <InfoGridLocation event={event} />
        <InfoGridContext event={event} />
      </InfoGridCarousel>
    </Container>
  )
}
