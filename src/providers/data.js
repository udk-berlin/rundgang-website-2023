import React, { createContext, useContext, useMemo } from 'react'
import useSWR from 'swr'
import { getLocationsTreeUrl } from '@/utils/api/locations'
import {gql, useQuery} from "@apollo/client";

const PROJECTS_QUERY = gql`
  {
    items {
      name
      id
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
      thumbnail
      thumbnail_full_size
    }
  }
`;

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
  locations: {},
  projects: {},
  contexts: {},
  error: null,
})

const fetcher = (url) => fetch(url).then((res) => res.json());

export function DataProvider ({ children, onlyTemporalData = false }) {
  const { data: locations, error } = useSWR(
    getLocationsTreeUrl(),
    fetcher
  );

  const projects = useQuery(PROJECTS_QUERY);
  const contexts = useQuery(CONTEXTS_QUERY);

  const value = useMemo(() => {
    let filteredLocationsObj
    let filteredProjectsObj

    if (onlyTemporalData) {
     if (locations && !projects.loading && !projects.error) {
       filteredProjectsObj = projects.data.items
       filteredProjectsObj = filteredProjectsObj.filter(project => project.allocation && project.allocation.temporal && project.allocation.temporal.length > 0)

       const locationsObjs= {}
       Object.values(locations.children).forEach(location => locationsObjs[location.id] = location)

       filteredLocationsObj = {}
       filterByNodeIds(Object.values(locationsObjs), filteredProjectsObj.map(project => project.id)).forEach(locationsObj => filteredLocationsObj[locationsObj.id] = locationsObj)
      }
    } else {
      if (locations) {
        const locationsObjs= {}
        Object.values(locations.children).forEach(location => locationsObjs[location.id] = location)

        filteredLocationsObj = {}
        filter(Object.values(locationsObjs)).forEach(locationsObj => filteredLocationsObj[locationsObj.id] = locationsObj)
      }

      if (!projects.loading && !projects.error) {
        filteredProjectsObj = projects.data.items
      }
    }

    let filteredContextsObj

    if (!contexts.loading && !contexts.error) {
      filteredContextsObj = buildObjects(contexts)
    }

    return { locations: filteredLocationsObj, error, projects: filteredProjectsObj, contexts: filteredContextsObj }
  }, [
    locations,
    projects,
    contexts,
    error,
  ]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("You need to wrap DataProvider.");
  }

  return context;
}

function filter(array) {
  const getChildren = (result, object) => {
    if (object.type === 'item') {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return array.reduce(getChildren, []);
}

function filterByNodeIds(array, nodeIds) {
  const getChildren = (result, object) => {
    if (object.type === 'item' && nodeIds.includes(object.id)) {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return array.reduce(getChildren, []);
}

function buildObjects(res) {
  const obj = {}

  if (res && res.data && res.data.contexts) {
    res.data.contexts.forEach(context => {
      obj[context.id] = context
    })
  }

  return obj
}