import {getItemIds, getItem} from "@/utils/api/items";
import Page from "@/components/pages/page";
import Project from "@/components/pages/projects/project";

import {LOCALES} from "@/components/localization/provider";

export async function getStaticProps ({ params }) {
  const project = await getItem(params.id)
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
      <Project project={project} />
    </Page>
  )
}