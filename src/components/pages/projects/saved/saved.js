import styled from "styled-components";
import Masonry from "react-responsive-masonry";


import { useFilter } from '@/providers/filter'

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";

export const MASONRY_COLUMNS = 4
export const MASONRY_GUTTER = "0.75rem"

export default function SavedProjects() {
  const filter = useFilter()

  console.log(filter.filteredProjects)

  return (
    <Layout>
      <SavedProjectsContainer>
        <Masonry columnsCount={MASONRY_COLUMNS} gutter={MASONRY_GUTTER}>
          {Object.values(filter.filteredProjects).map((project) => (
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
