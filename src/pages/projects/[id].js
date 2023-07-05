import React from 'react'
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project/project";
import { SavedProjectsProvider } from '@/providers/saved_projects'

export default function ProjectPage () {
  const router = useRouter()

  return (
    <Page title={'project'}>
      <SavedProjectsProvider>
        {
          router?.query?.id ?
            <Project id={router.query.id}/> :
            'Loading...'
        }
      </SavedProjectsProvider>
    </Page>
  )
}
