import styled from 'styled-components'
import { Masonry } from '@mui/lab';


import ProjectCell from '@/components/pages/program/project_cell'
import Layout from "@/components/layout/layout";

const EVENTS = [
    {src: 'https://placehold.co/900x500', height: '900', width: '500'},
    {src: 'https://placehold.co/910x400', height: '910', width: '400'},
    {src: 'https://placehold.co/920', height: '920', width: '920'},
    {src: 'https://placehold.co/900', height: '900', width: '900'},
    {src: 'https://placehold.co/300', height: '300', width: '300'},
    {src: 'https://placehold.co/900x400', height: '900', width: '400'},
    {src: 'https://placehold.co/400x900', height: '400', width: '900'},
    {src: 'https://placehold.co/900x500', height: '900', width: '500'},
    {src: 'https://placehold.co/910', height: '910', width: '910'},
    {src: 'https://placehold.co/920', height: '920', width: '920'},
    {src: 'https://placehold.co/900', height: '900', width: '900'},
    {src: 'https://placehold.co/300', height: '300', width: '300'},
    {src: 'https://placehold.co/900x400', height: '900', width: '400'},
    {src: 'https://placehold.co/400x900', height: '400', width: '900'},
    {src: 'https://placehold.co/900x500', height: '900', width: '500'},
    {src: 'https://placehold.co/910', height: '910', width: '910'},
    {src: 'https://placehold.co/920', height: '920', width: '920'},
]

export default function Program ({ events }) {
    return (
      <Layout>
          <MasonryWrapper>
              <Masonry columns={4} spacing={3}>
                  {events.map(event => (<ProjectCell event={event} />))}
              </Masonry>
          </MasonryWrapper>
      </Layout>
    )
}

const MasonryWrapper = styled.div`
  margin: 1rem 0 1rem 1rem;
`