import styled from "styled-components";
import Masonry from "react-responsive-masonry";

import { useFilter, FilterProvider } from '@/providers/filter'
import { SavedProjectsProvider } from '@/providers/projects/saved'

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";

export const MASONRY_COLUMNS = 4
export const MASONRY_GUTTER = "0.75rem"

export default function Program({ projects, structures, formats, formatsFilters, structuresFilters }) {
  return (
    <SavedProjectsProvider>
      <FilterProvider projects={projects} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}>
        <ProgramContent />
      </FilterProvider>
    </SavedProjectsProvider>
  );
}

function ProgramContent() {
  const filter = useFilter()

  return (
    <Layout>
      <ProgramContainer>
        <Masonry columnsCount={MASONRY_COLUMNS} gutter={MASONRY_GUTTER}>
          {Object.values(filter.filteredProjects).map((project) => (
            <ProjectCell project={project} />
          ))}
        </Masonry>
      </ProgramContainer>
    </Layout>
  );
}

const ProgramContainer = styled.div`
  padding: var(--program-padding);
`;
