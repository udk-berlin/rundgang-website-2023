import {getItemIds, getItems} from "@/utils/api/items";
import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project/project";

import {LOCALES} from "@/components/localization/provider";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import React from 'react'

export async function getStaticProps ({ params }) {
  const projects = await getItems()
  const project = projects[params.id]
  return { props: { project } }
}

export async function getStaticPaths() {
  const ids = await getItemIds();
  const paths = []

  ids.forEach(id => {
    LOCALES.forEach(locale => {
      paths.push(
        {
          params: {
            id: id,
          },
          locale
        }
      )
    })
  });

  return {
    paths,
    fallback: false,
  };
}

export default function ProjectPage ({ project }) {
  return (
    <Page>
      <SavedProjectsProvider>
        <Project project={project} />
      </SavedProjectsProvider>
    </Page>
  )
}
