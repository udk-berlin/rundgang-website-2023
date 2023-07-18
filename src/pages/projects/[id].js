import React from 'react'
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project/project";
import LoadingLayout from "@/components/layout/loading";

import { SavedProjectsProvider } from '@/providers/saved_projects'
import { DataProvider, useData } from "@/providers/data/data";
import { LinkProvider, useLink } from "@/providers/link";

export default function ProjectPage() {
  return (
    <Page title="project">
      <LinkProvider>
        <LinkProviderChildren />
      </LinkProvider>
    </Page>
  );
}

function LinkProviderChildren() {
  const router = useRouter()
  const link = useLink()

  return (
    <>
      {
        link.clicked || !router || !router.query || !router.query.id ?
          <LoadingLayout /> :
          <DataProvider forProject={true} id={router.query.id}>
            <DataProviderChildren />
          </DataProvider>
      }
    </>
  )
}

function DataProviderChildren() {
  const { project } = useData(true)

  return (
    <>
      {
        project ?
          <SavedProjectsProvider>
            <Project />
          </SavedProjectsProvider> :
          <LoadingLayout />
      }
    </>
  );
}

