import styled from 'styled-components'

import ProjectPageTitle from '@/components/pages/project/project_title'
import ProjectPageAuthors from '@/components/pages/project/project_authors'
import InfoGrid from '@/components/pages/program/info_grid'
import { LocalizedLink } from "@/components/localization/links";

const authors = ['Marisa Nest', 'Juan Pablo Gaviria Bedoya', 'Lukas Esser']

export default function ProjectCell ({ src }) {
  return (
    <Container>
      <LocalizedLink href="/project">
        <img src={src}></img>
      </LocalizedLink>
      <LocalizedLink href="/project">
        <ProjectPageTitle fontSize={1}>
          REM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        </ProjectPageTitle>
      </LocalizedLink>
      <ProjectPageAuthors fontSize={0.8} authors={authors} />
      <InfoGrid eventType="Tanz" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`
