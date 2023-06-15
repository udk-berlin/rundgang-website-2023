import ProjectTitle from "@/components/pages/projects/title";
import ProjectAuthors from "@/components/pages/projects/authors";

import InfoGrid from '@/components/pages/program/info_grid/info_grid'
import ProjectImage from "@/components/pages/projects/image";

export default function ProjectCell ({ project }) {
  return (
    <div key={project.id}>
      <ProjectImage project={project}/>
      <ProjectTitle project={project}/>
      <ProjectAuthors project={project} />
      <InfoGrid project={project} />
    </div>
  )
}
