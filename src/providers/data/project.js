import React, { createContext, useContext, useMemo } from 'react'
import {gql, useQuery} from "@apollo/client";
import useSWR from "swr";
import {fetcher, getRenderJsonUrl} from "@/utils/api/api";

const CONTEXTS_QUERY = gql`
{
  contexts {
    id
    name
    template
    parents {
      id
    }
  }
}
`;

const DataContext = createContext({
  project: {},
  contexts: {},
  media: {}
})

export function ProjectDataProvider ({ children, id }) {
  const projectQuery = gql`
  {item(id: "${id}") {
    name,
    thumbnail,
    thumbnail_full_size,
    allocation {
      temporal {
        start
        end
      }
    }
    origin {
      authors {
        id
        name
      }
    }  
    parents {
     id
    }
    description {
      language
      content
    } 
	}}`;

  const project = useQuery(projectQuery);
  const contexts = useQuery(CONTEXTS_QUERY);
  const media = useSWR(
    getRenderJsonUrl(id),
    fetcher
  );

  const value = useMemo(() => {
    let projectObj

    if (!project.loading && !project.error) {
      projectObj = project.data.item
    }

    let contextsObj = {}

    if (!contexts.loading && !contexts.error) {
      contexts.data.contexts.forEach(context => {
        contextsObj[context.id] = context
      })
    }

    return { project: projectObj, contexts: contextsObj, media: media?.data }
  }, [
    project,
    contexts,
    media
  ]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export function useProjectData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("You need to wrap DataProvider.");
  }

  return context;
}