import React from 'react'
import useSWR from 'swr'

import styles from '@/styles/pages/projects/Project.module.css'

import ProjectAuthors from '@/components/pages/projects/authors'
import ProjectTitle from '@/components/pages/projects/title'
import Layout from '@/components/layout/layout'

import { getRenderJsonUrl, fetcher } from '@/utils/api/api'

export default function Project ({ project }) {
  const { data, error, isLoading } = useSWR(getRenderJsonUrl(project.id), fetcher)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.images}>
          <ProjectImage link="https://placeholder.co/800" />
          <ProjectImage link="https://placeholder.co/500x800" />
          <ProjectImage link="https://placeholder.co/800x600" />
        </div>
        <div>
          <ProjectTitle project={project} />
          <ProjectAuthors project={project} />
          <ProjectText>
            Dolore aliqua anim culpa adipisicing dolor quis do proident nisi
            deserunt mollit magna nisi. Et ullamco magna eiusmod minim Lorem sunt
            anim duis officia exercitation. Ex Lorem sunt minim ad duis incididunt
            magna sunt tempor irure mollit mollit. Ea ex cillum magna non est sint
            consequat deserunt fugiat elit est. Nisi ex nisi cupidatat tempor qui
            excepteur dolore ipsum ullamco aute nisi elit. Ut culpa laborum
            laborum sunt dolore dolore aute laborum minim officia consequat
            aliqua. In id labore Lorem adipisicing mollit dolore in laborum.
            Reprehenderit pariatur aliqua duis incididunt. Qui duis proident do
            Lorem nostrud. Fugiat sunt esse sint deserunt. Aute exercitation
            cillum consectetur magna do et eiusmod ut anim non Lorem ut
            reprehenderit eiusmod. Aliquip proident aliquip officia fugiat sint in
            qui sit voluptate qui in amet minim qui. Minim minim ex veniam eiusmod
            sint aliquip ea. Reprehenderit consequat commodo sint anim eiusmod
            culpa veniam. Est velit consequat nostrud esse sit culpa amet labore
            anim aliquip reprehenderit irure.
          </ProjectText>
        </div>
      </div>
    </Layout>
  )
}

export function ProjectImage ({ link }) {
  return <img src={link}></img>
}

export function ProjectText ({ children }) {
  return <div>{children}</div>
}
