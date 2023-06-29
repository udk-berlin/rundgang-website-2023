import Page from "@/components/pages/page";
import Imprint from "@/components/pages/imprint";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import React from 'react'

export default function ImprintPage () {
  return (
    <Page>
      <SavedProjectsProvider>
        <Imprint />
      </SavedProjectsProvider>
    </Page>
  )
}
