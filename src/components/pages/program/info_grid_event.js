import styled from 'styled-components'

import { HoverLink } from '@/components/hover_link'
import { LocalizedLink } from "@/components/localization/links";

const eventTypeToMarginLeftMapper = {
  Ausstellung: '73%',
  Beratungsangebot: '62%',
  DJSet: '80%',
  Filmvorführung: '1%',
  Führung: '10%',
  Installation: '15%',
  Klanginstallation: '20%',
  Konzert: '25%',
  Gespräch: '30%',
  Lesung: '35%',
  Modenschau: '40%',
  Musical: '45%',
  offeneProbe: '50%',
  OpenSpace: '55%',
  Oper: '60%',
  Performance: '65%',
  Podiumsgespräch: '27%',
  Projektpräsentation: '48%',
  Tanz: '85%',
  Theater: '77%',
  Vortrag: '8%',
  Workshop: '32%',
  Weitere: '42',
  default: '0%'
}

export default function InfoGridEvent ({ eventType }) {
  return (
    <HoverLinkEvent eventType={eventType}>
      <LocalizedLink href="/">
        <Container>{eventType}</Container>
      </LocalizedLink>
    </HoverLinkEvent>
  )
}

const HoverLinkEvent = styled(HoverLink)`
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: ${(prop) =>
    prop.eventType in eventTypeToMarginLeftMapper
      ? eventTypeToMarginLeftMapper[prop.eventType]
      : eventTypeToMarginLeftMapper.default};
`

const Container = styled.div`
  padding: 0.2rem 0.4rem;
`
