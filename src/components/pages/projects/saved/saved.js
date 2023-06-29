import Masonry from 'react-responsive-masonry'
import styled from 'styled-components'


import { useFilter } from '@/providers/filter'
import { useSavedProjects } from '@/providers/projects/saved'

import Layout from '@/components/layout/layout'
import ProjectCell from '@/components/pages/program/project_cell'

export const MASONRY_COLUMNS = 4
export const MASONRY_GUTTER = "0.75rem"

export default function SavedProjects() {
  const filter = useFilter()
  const savedProjects = useSavedProjects()
  const projects = getSavedAndFilteredProjects(savedProjects, filter.filteredProjects)

  return (
    <Layout>
      <SavedProjectsContainer>
        <Masonry columnsCount={MASONRY_COLUMNS} gutter={MASONRY_GUTTER}>
          {Object.values(projects).map((project) => (
            <ProjectCell project={project} />
          ))}
        </Masonry>
      </SavedProjectsContainer>
    </Layout>
  );
}

const SavedProjectsContainer = styled.div`
  padding: var(--program-padding);
`;

function getSavedAndFilteredProjects(savedProjects, filteredProjects) {
  const projects = {}

  if (savedProjects) {
    savedProjects.forEach(id => {
      if (Object.keys(filteredProjects).includes(id)) {
        projects[id] = filteredProjects[id]
      }
    })
  }

  return projects
}
