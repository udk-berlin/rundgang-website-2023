import ProjectPageTitle from '@/components/pages/project/project_title'
import ProjectPageAuthors from '@/components/pages/project/project_authors'
import InfoGrid from '@/components/pages/program/info_grid'
import { LocalizedLink } from "@/components/localization/links";

const authors = ['Marisa Nest', 'Juan Pablo Gaviria Bedoya', 'Lukas Esser']

export default function ProjectCell ({ event }) {
  return (
    <div key={event.src}>
      <EventImage event={event}/>
      <EventTitle event={event}/>
      <EventAuthors event={event} />
      <EventInfos event={event} />
    </div>
  )
}
function EventImage ({ event }) {
  return (
    <EventLink event={event}>
      <img
        src={event.src}
        alt={event.name}
        loading="lazy"
        style={{width: '100%'}}
      />
    </EventLink>
  )
}

function EventTitle ({ event }) {
  return (
    <EventLink event={event}>
      <ProjectPageTitle fontSize={1}>
        REM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
      </ProjectPageTitle>
    </EventLink>
  )
}

function EventAuthors ({ event }) {
  return (
    <ProjectPageAuthors fontSize={0.8} authors={authors} />
  )
}

function EventInfos({ event }) {
  return (
    <InfoGrid eventType="Tanz" />
  )
}

function EventLink ({ event, children }) {
  return (
    <LocalizedLink href={`/event/${event.id}`}>
      {children}
    </LocalizedLink>
  )
}