import React from 'react'
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project/project";
import LoadingLayout from "@/components/layout/loading";

import { SavedProjectsProvider } from '@/providers/saved_projects'
import { DataProvider, useData } from "@/providers/data/data";
import { useWindowSize, WindowSizeProvider } from "@/providers/window_size";

export default function ProjectPage() {
  return (
    <Page metaHeaderConfig={{ initialTitle: 'project' }}>
      <WindowSizeProvider>
        <WindowSizeChildren />
      </WindowSizeProvider>
    </Page>
  );
}

function WindowSizeChildren() {
  const router = useRouter()
  const windowSize = useWindowSize()

  return (
    <SavedProjectsProvider>
      {
        windowSize ? (router && router.query && router.query.id) ?
          <DataProvider forProject={true} id={router.query.id}>
            <DataProviderChildren />
          </DataProvider> :
          <LoadingLayout /> :
          <></>
      }
    </SavedProjectsProvider>
  )
}

function DataProviderChildren() {
  const { project } = useData(true)

  return (
    <>
      {
        project ?
          <Project /> :
          <LoadingLayout />
      }
    </>
  );
}

