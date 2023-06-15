import styled from 'styled-components'
import { Masonry } from '@mui/lab';

import ProjectCell from '@/components/pages/program/project_cell'
import Layout from "@/components/layout/layout";

export default function Program ({ projects }) {
    return (
      <Layout>
          <ProgramContainer>
              <Masonry columns={4} spacing={3}>
                  {projects.map(project => (<ProjectCell project={project} />))}
              </Masonry>
          </ProgramContainer>
      </Layout>
    )
}

const ProgramContainer = styled.div`
  margin: 1rem 0 1rem 1rem;
`