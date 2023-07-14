import { FIRST_TIME, LAST_TIME } from "@/themes/pages/timeline";
import TimelineProjectsGroup from "@/components/pages/timeline/project/projects_group";
import {useData} from "@/providers/data/data";

export default function TimelineProjectsGroups({ projectIds, roomIndex = 0 }) {
  const { projects } = useData()
  const filteredProjects = projects.filter(project => projectIds.includes(project.id))
  let projectsGroups = groupProjects(sortFlattenedProjects(flattenProjects(filteredProjects)))

  return (
    <div>
      {
        projectsGroups.map((projectsGroup, projectsGroupIndex) => {
          return <TimelineProjectsGroup projectsGroup={projectsGroup} projectsGroups={projectsGroups} projectsGroupIndex={projectsGroupIndex} roomIndex={roomIndex}/>
        })
      }
    </div>
  );
}

function flattenProjects(projects) {
  const flattenedProjects = []

  projects.forEach(project => {
    if(project.allocation && project.allocation.temporal) {
      project.allocation.temporal.forEach(time => {
        const start = new Date(time.start * 1000 - 7200000)
        const end =  new Date(time.end * 1000 - 7200000)

        flattenedProjects.push({
          id: project.id,
          name: project.name,
          start: start < FIRST_TIME ? FIRST_TIME : start,
          end: end > LAST_TIME ? LAST_TIME : end,
          thumbnail: project.thumbnail.replace('crop', 'scale')
        })
      })
    }
  })

  return flattenedProjects
}

function sortFlattenedProjects(projects) {
  return projects.sort(compareProjects)
}

function compareProjects(a, b) {
  if (a.start > b.start) {
    return 1
  } else if (a.start === b.start) {
    return 0
  } else if (a.start < b.start) {
    return -1
  }
}

function groupProjects(projects) {
  const groups = []

  projects.forEach(project => {
    if (groups.length === 0) {
      groups.push([project])
      return
    }

    let groupFound = false;
    groups.forEach((group, index) => {
      if (!groupFound && group[group.length - 1].end < project.start) {
        group.push(project)
        groupFound = true
      }
    })

    if (!groupFound) {
      groups.push([project])
    }
  })

  return groups
}
