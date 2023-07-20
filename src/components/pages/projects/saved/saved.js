import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import styled, { ThemeProvider } from "styled-components";

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";

import { useFilter } from "@/providers/filter";
import { useSavedProjects } from "@/providers/saved_projects";
import { useWindowSize } from "@/providers/window_size";

import { breakpoints } from "@/themes/theme";
import {
  programLTheme,
  programMTheme,
  programSTheme,
} from "@/themes/pages/program";
import LoadingLayout from "@/components/layout/loading";

export default function SavedProjects() {
  const filter = useFilter();
  const savedProjects = useSavedProjects();

  const projects = getSavedAndFilteredProjects(
    savedProjects,
    filter.filteredProjects,
    true
  );

  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.s) {
      setResponsiveTheme(programSTheme);
    } else if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(programMTheme);
    } else if (windowSize?.width > breakpoints.m) {
      setResponsiveTheme(programLTheme);
    }
  }, [windowSize?.width]);

  return (
    <>
      {
        responsiveTheme ?
          <Layout defaultSliderPosition={2}>
            <ThemeProvider theme={responsiveTheme}>
              <SavedProjectsContainer>
                <Masonry
                  columnsCount={responsiveTheme.MASONRY_COLUMNS}
                  gutter={responsiveTheme.MASONRY_GUTTER}
                >
                  {projects.map((project) => (
                    <ProjectCell project={project} />
                  ))}
                </Masonry>
              </SavedProjectsContainer>
            </ThemeProvider>
          </Layout> : <LoadingLayout />
      }
    </>
  );
}

const SavedProjectsContainer = styled.div`
  min-height: ${({ theme }) => theme.height};
  padding: ${({ theme }) => theme.padding};
`;

function getSavedAndFilteredProjects(savedProjects, filteredProjects, useFast = false) {
  if (useFast) {
    const projects = [];

    if (savedProjects) {
      filteredProjects.forEach(project => {
        if (savedProjects.includes(project.id)) {
          projects.push(project)
        }
      })
    }

    return projects;
  } else {
    const projects = {};

    if (savedProjects) {
      savedProjects.forEach(id => {
        if (Object.keys(filteredProjects).includes(id)) {
          projects[id] = filteredProjects[id];
        }
      });
    }

    return projects;
  }
}
