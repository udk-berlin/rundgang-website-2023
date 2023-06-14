import styled from 'styled-components'

import Page from "@/components/page/page";
import ProjectCell from '@/components/pages/program/project_cell'
import Layout from "@/components/layout/layout";

export default function ProgramPage () {
  return (
    <Page>
      <Layout>
        <Grid>
          <ProjectCell src={'https://placehold.co/900x400'} />
          <ProjectCell src={'https://placehold.co/300x250'} />
          <ProjectCell src={'https://placehold.co/900x400'} />
          <ProjectCell src={'https://placehold.co/500x900'} />
          <ProjectCell src={'https://placehold.co/900x500'} />
          <ProjectCell src={'https://placehold.co/910x400'} />
          <ProjectCell src={'https://placehold.co/920'} />
          <ProjectCell src={'https://placehold.co/900'} />
          <ProjectCell src={'https://placehold.co/300'} />
          <ProjectCell src={'https://placehold.co/900x400'} />
          <ProjectCell src={'https://placehold.co/400x900'} />
          <ProjectCell src={'https://placehold.co/900x500'} />
          <ProjectCell src={'https://placehold.co/910'} />
          <ProjectCell src={'https://placehold.co/920'} />
          <ProjectCell src={'https://placehold.co/900'} />
          <ProjectCell src={'https://placehold.co/300'} />
          <ProjectCell src={'https://placehold.co/900x400'} />
          <ProjectCell src={'https://placehold.co/400x900'} />
          <ProjectCell src={'https://placehold.co/900x500'} />
          <ProjectCell src={'https://placehold.co/910'} />
          <ProjectCell src={'https://placehold.co/920'} />

          <Break />
          <Break />
          <Break />
        </Grid>
      </Layout>
    </Page>
  )
}

const Grid = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
  padding: 1rem;

  height: 4000px;

  & > * {
    width: 24%;
  }

  & > *:nth-of-type(4n + 1) {
    order: 1;
  }
  & > *:nth-of-type(4n + 2) {
    order: 2;
  }
  & > *:nth-of-type(4n + 3) {
    order: 3;
  }
  & > *:nth-of-type(4n) {
    order: 4;
  }
`

const Break = styled.span`
  /* Force new columns */
  flex-basis: 100%;
  width: 0;
  margin: 0;
  content: "";
  padding: 0;
`
