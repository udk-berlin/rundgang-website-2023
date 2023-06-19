import styled from 'styled-components'
// import { Masonry } from '@mui/lab';
// import Masonry from 'react-masonry-css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import { Masonry } from "masonic";

import ProjectCell from '@/components/pages/program/project_cell'
import Layout from "@/components/layout/layout";

export default function Program ({ projects }) {
  return (
      <Layout>
          <ProgramContainer>
              {/*<Masonry columnCount={4} columnGutter={20} items={projects} render={MasonryCard} />*/}
            <Masonry columnsCount={4} gutter={"2rem"}>
              {projects.map(project => (<ProjectCell project={project} />))}
            </Masonry>
          </ProgramContainer>
      </Layout>
    )
}

const MasonryCard = ({ index, data, width }) => (
  <ProjectCell project={data} />
);

const ProgramContainer = styled.div`
  //column-count: 4;
  //column-gap: 10px;
  margin: 1rem 0 1rem 1rem;
`