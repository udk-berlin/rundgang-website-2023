import styled from 'styled-components'

import ProjectAuthors from '@/components/pages/project/authors'
import ProjectTitle from '@/components/pages/project/title'
import Layout from "@/components/layout/layout";

export default function Project ({ project }) {
  return (
    <Layout>
      <Container>
        <ImageContainer>
          <ProjectImages link="https://placeholder.co/800" />
          <ProjectImages link="https://placeholder.co/500x800" />
          <ProjectImages link="https://placeholder.co/800x600" />
        </ImageContainer>
        <InfoContainer>
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
        </InfoContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  overflow-y: scroll;
`

const InfoContainer = styled.div`
  padding: 1rem;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 60%;
  width: 40%;
  overflow-y: scroll;
`

export function ProjectImages ({ link }) {
  return <img src={link}></img>
}

export function ProjectText ({ children }) {
  return <div>{children}</div>
}
