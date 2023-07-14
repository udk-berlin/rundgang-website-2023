import { getFormatsFilters } from "@/utils/api/formats";
import { getStructuresFilters } from "@/utils/api/structures";
import {
  getProgramFormats,
  getProgramStructures,
} from "@/utils/api/pages/program";

import { FilterProvider } from "@/providers/filter";
import { SavedProjectsProvider } from "@/providers/saved_projects";

import Page from "@/components/pages/page";
import SavedProjects from "@/components/pages/projects/saved/saved";
import {gql, useQuery} from "@apollo/client";
import Layout from "@/components/layout/layout";
import {LoadingContainer} from "@/components/loading";
import React, {useState} from "react";
import LoadingLayout from "@/components/layout/loading";

const PROJECTS_QUERY = gql`
  {
    items {
      name
      id
      origin {
        authors {
          id
          name
        }
      }
      parents {
        id
      }
      thumbnail
      thumbnail_full_size
    }
  }
`;

export async function getStaticProps() {
  const formats = await getProgramFormats();
  const formatsFilters = await getFormatsFilters();

  const structures = await getProgramStructures();
  const structuresFilters = await getStructuresFilters();

  return {
    props: { formats, formatsFilters, structures, structuresFilters },
  };
}

export default function SavedProjectsPage({
  formats,
  formatsFilters,
  structures,
  structuresFilters,
}) {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="Saved Projects">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            {<SavedProjectsContainer setIsLinkClicked={setIsLinkClicked} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}/>}
          </SavedProjectsProvider>
      }
    </Page>
  );
}


function SavedProjectsContainer ({ setIsLinkClicked, formats, formatsFilters, structures, structuresFilters }) {
  const projects = useQuery(PROJECTS_QUERY);
  return (
    <>
      {
        projects.loading || projects.error ?
          (
            <Layout disableFilter={true}>
              <LoadingContainer>Loading...</LoadingContainer>
            </Layout>
          ) :
          (
            <FilterProvider
              projects={projects.data.items}
              structures={structures}
              formats={formats}
              formatsFilters={formatsFilters}
              structuresFilters={structuresFilters}
            >
              <Layout setIsLinkClicked={setIsLinkClicked}>
                <SavedProjects />
              </Layout>
            </FilterProvider>
          )
      }
    </>
  )
}
