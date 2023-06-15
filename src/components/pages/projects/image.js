import ProjectLink from "@/components/pages/projects/link";

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

export default function ProjectImage ({ project }) {
  let image = <></>

  if ('thumbnail' in project && project.thumbnail) {
    image = (
      <img
        src={project.thumbnail}
        alt={project.name}
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
    <ProjectLink project={project}>
      {image}
    </ProjectLink>
  )
}