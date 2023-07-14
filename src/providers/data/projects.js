import React, { createContext, useContext, useMemo } from 'react'
import useSWR from 'swr'
import {getLocationsTreeUrl, getStructuresTreeUrl, getFormatsTreeUrl, getTree} from '@/utils/api/api'
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

const ProjectsDataContext = createContext({
  locations: {},
  projects: {},
  contexts: {},
  structures: {},
  structureFilters: {},
  formats: {},
  formatFilters: {},
})

const fetcher = (url) => fetch(url).then((res) => res.json());

export function ProjectsDataProvider ({ children, onlyTemporalData = false }) {
  const { data: locations } = useSWR(
    getLocationsTreeUrl(),
    fetcher
  );

  const { data: structures } = useSWR(
    getStructuresTreeUrl(),
    fetcher
  );

  const { data: formats } = useSWR(
    getFormatsTreeUrl(),
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

    let contextsObj = {}

    if (!contexts.loading && !contexts.error) {
      contexts.data.contexts.forEach(context => {
        contextsObj[context.id] = context
      })
    }

    let filteredStructuresObj
    let structureFilters

    if (structures) {
      const structuresObjs= {}
      Object.values(structures.children).forEach(structure => structuresObjs[structure.id] = structure)

      filteredStructuresObj = {}
      filter(Object.values(structuresObjs)).forEach(structuresObj => filteredStructuresObj[structuresObj.id] = structuresObj)

      structureFilters = getStructuresFilters(structures)
    }

    let filteredFormatsObj
    let formatFilters

    if (formats) {
      const formatsObjs= {}
      Object.values(formats.children).forEach(format => formatsObjs[format.id] = format)

      filteredFormatsObj = {}
      filter(Object.values(formatsObjs)).forEach(formatsObj => filteredFormatsObj[formatsObj.id] = formatsObj)

      formatFilters = getFormatsFilters(formats)
    }

    return { locations: filteredLocationsObj, projects: filteredProjectsObj, contexts: contextsObj, structures: filteredStructuresObj, structureFilters: structureFilters, formats: filteredFormatsObj, formatFilters: formatFilters }
  }, [
    locations,
    projects,
    contexts,
    structures,
    formats,
  ]);

  return (
    <ProjectsDataContext.Provider value={value}>
      {children}
    </ProjectsDataContext.Provider>
  )
}

export function useProjectsData() {
  const context = useContext(ProjectsDataContext);

  if (!context) {
    throw new Error("You need to wrap ProjectsDataProvider.");
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

function getFormatsFilters (tree) {
  let filters = {}

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.template === 'format-element') {
        filters[child.id] = {
          id: child.id,
          name: child.name,
          template: child.template
        }
      } else {
        getChildren(child)
      }
    })
  };

  getChildren(tree)

  return filters
}

function getStructuresFilters (tree) {
  let filters = {}

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.template === 'centre' || child.template === 'faculty') {
        filters[child.id] = {
          id: child.id,
          name: child.name,
          template: child.template
        }
      } else {
        getChildren(child)
      }
    })
  };

  getChildren(tree)

  return filters
}