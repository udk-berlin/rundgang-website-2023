import Masonry from "react-responsive-masonry";
import styled, { ThemeProvider } from "styled-components";

import { useFilter } from "@/providers/filter";
import { useSavedProjects } from "@/providers/saved_projects";

import Layout from "@/components/layout/layout";
import ProjectCell from "@/components/pages/program/project_cell";
import { useEffect, useState } from "react";
import {
  programLTheme,
  programMTheme,
  programSTheme,
} from "@/themes/pages/program";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/theme";

export const MASONRY_COLUMNS = 4;
export const MASONRY_GUTTER = "0.75rem";

export default function SavedProjects() {
  const filter = useFilter();
  const savedProjects = useSavedProjects();
  const projects = getSavedAndFilteredProjects(
    savedProjects,
    filter.filteredProjects
  );

  const [responsiveTheme, setResponsiveTheme] = useState(programLTheme);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= breakpoints.s) {
      setResponsiveTheme(programSTheme);
    } else if (windowSize.width <= breakpoints.m) {
      setResponsiveTheme(programMTheme);
    } else {
      setResponsiveTheme(programLTheme);
    }
  }, [windowSize.width]);

  return (
    <Layout>
      <ThemeProvider theme={responsiveTheme}>
        <SavedProjectsContainer>
          <Masonry columnsCount={MASONRY_COLUMNS} gutter={MASONRY_GUTTER}>
            {Object.values(projects).map((project) => (
              <ProjectCell project={project} />
            ))}
          </Masonry>
        </SavedProjectsContainer>
      </ThemeProvider>
    </Layout>
  );
}

const SavedProjectsContainer = styled.div`
  padding: var(--program-padding);
`;

function getSavedAndFilteredProjects(savedProjects, filteredProjects) {
  const projects = {};

  if (savedProjects) {
    savedProjects.forEach((id) => {
      if (Object.keys(filteredProjects).includes(id)) {
        projects[id] = filteredProjects[id];
      }
    });
  }

  return projects;
}
