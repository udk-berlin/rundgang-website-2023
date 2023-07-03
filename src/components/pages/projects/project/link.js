import { LocalizedLink } from "@/components/localization/links";

export default function ProjectLink ({ project, children }) {
  return (
    <LocalizedLink href={`/projects/${project.id}`}>
      {children}
    </LocalizedLink>
  )
}