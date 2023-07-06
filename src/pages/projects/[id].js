import React, {useState} from 'react'
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project/project";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import LoadingLayout from "@/components/layout/loading";

export default function ProjectPage () {
  const router = useRouter()
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title={'project'}>
      {
        isLinkClicked || !router || !router.query || !router.query.id ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <Project id={router.query.id} setIsLinkClicked={setIsLinkClicked}/>
          </SavedProjectsProvider>
      }
    </Page>
  )
}
