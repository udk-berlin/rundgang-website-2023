import Page from "@/components/pages/page";
import Contact from "@/components/pages/contact";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import React from 'react'

export default function ContactPage () {
  return (
    <Page>
      <SavedProjectsProvider>
        <Contact />
      </SavedProjectsProvider>
    </Page>
  )
}
