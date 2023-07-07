import { FIRST_TIME, LAST_TIME } from "@/themes/pages/timeline";
import TimelineProjectsGroup from "@/components/pages/timeline/project/projects_group";

export default function TimelineProjectsGroups({ projects, roomIndex = 0 }) {
  let projectsGroups = groupProjects(sortFlattenedProjects(flattenProjects(projects)))

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
    if('temporal' in project) {
      project.temporal.forEach(time => {
        flattenedProjects.push({
          id: project.id,
          name: project.name,
          start: time.start < FIRST_TIME ? FIRST_TIME : time.start,
          end: time.end > LAST_TIME ? LAST_TIME : time.end,
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
