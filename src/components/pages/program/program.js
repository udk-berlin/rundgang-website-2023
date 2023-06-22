import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";

export default function Program({ projects }) {
  return (
    <Layout>
      <ProgramContainer>
        <Masonry columnsCount={4} gutter={"0.75rem"}>
          {projects.map((project) => (
            <ProjectCell project={project} />
          ))}
        </Masonry>
      </ProgramContainer>
    </Layout>
  );
}

const ProgramContainer = styled.div`
  padding: 1rem;
`;
