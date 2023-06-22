import styled from "styled-components";
import Masonry from "react-responsive-masonry";

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";

export const MASONRY_COLUMNS = 4
export const MASONRY_GUTTER = "0.75rem"

export default function Program({ projects }) {
  return (
    <Layout>
      <ProgramContainer>
        <Masonry columnsCount={MASONRY_COLUMNS} gutter={MASONRY_GUTTER}>
          {projects.map((project) => (
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
