import React from 'react'
import { ProjectDataProvider, useProjectData } from "@/providers/data/project";
import { ProjectsDataProvider, useProjectsData } from "@/providers/data/projects";

export function DataProvider ({ children, onlyTemporalData = false, forProject = false, id }) {
  return (
    <>
      {
        forProject ?
          <ProjectDataProvider children={children} id={id} /> :
          <ProjectsDataProvider onlyTemporalData={onlyTemporalData} children={children} />
      }
    </>
  )
}

export function useData(forProject = false ) {
  if (forProject) {
    return useProjectData();
  } else {
    return useProjectsData();
  }
}