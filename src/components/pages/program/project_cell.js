import ProjectPageTitle from '@/components/pages/project/project_title'
import ProjectPageAuthors from '@/components/pages/project/project_authors'
import InfoGrid from '@/components/pages/program/info_grid'
import { LocalizedLink } from "@/components/localization/links";

const IMAGE_PLACEHOLDER_SIZES = [
  { height: 400 },
  { height: 500 },
  { height: 600 },
  { height: 700 },
  { height: 800 },
  { height: 900 },
]

const getRandomImagePlaceholderSize = () => {
  return IMAGE_PLACEHOLDER_SIZES[Math.floor(Math.random() * IMAGE_PLACEHOLDER_SIZES.length)]
}

export default function ProjectCell ({ event }) {
  console.log(event)
  return (
    <div key={event.id}>
      <EventImage event={event}/>
      <EventTitle event={event}/>
      <EventAuthors event={event} />
      <EventInfos event={event} />
    </div>
  )
}
function EventImage ({ event }) {
  let image = <></>

  if ('thumbnail' in event && event.thumbnail) {
    image = (
      <img
        src={event.thumbnail}
        alt={event.name}
        loading="lazy"
        style={{width: '100%'}}
      />
    )
  } else {
    const size = getRandomImagePlaceholderSize()
    image = (
      <div
        style={{
          width: '100%',
          height: size.height,
          minHeight: size.height,
          background: 'var(--color-transparent-pink)',
        }} />
    )
  }


  return (
    <EventLink event={event}>
      {image}
    </EventLink>
  )
}

function EventTitle ({ event }) {
  return (
    <EventLink event={event}>
      <ProjectPageTitle>
        {event.name}
      </ProjectPageTitle>
    </EventLink>
  )
}

function EventAuthors ({ event }) {
  return (
    <ProjectPageAuthors event={event} />
  )
}

function EventInfos({ event }) {
  return (
    <InfoGrid event={event} />
  )
}

function EventLink ({ event, children }) {
  return (
    <LocalizedLink href={`/event/${event.id}`}>
      {children}
    </LocalizedLink>
  )
}