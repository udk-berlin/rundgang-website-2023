import Masonry from "react-responsive-masonry";
import styled, { ThemeProvider } from "styled-components";

import { useFilter } from "@/providers/filter";
import { useSavedProjects } from "@/providers/saved_projects";

import Layout from "@/components/layout/layout";
import ProjectCell from "@/components/pages/program/project_cell";
import {useEffect, useMemo, useState} from "react";
import {
  programLTheme,
  programMTheme,
  programSTheme,
} from "@/themes/pages/program";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/theme";
import {gql, useQuery} from "@apollo/client";

const CONTEXTS_QUERY = gql`
{
  contexts {
    id,
    name,
    template,
    parents {
      id
    }
  }
}
`;


function buildObjects(res) {
  const obj = {}

  if (res && res.data && res.data.contexts) {
    res.data.contexts.forEach(context => {
      obj[context.id] = context
    })
  }

  return obj
}

export default function SavedProjects() {
  const filter = useFilter();
  const savedProjects = useSavedProjects();
  const projects = getSavedAndFilteredProjects(
    savedProjects,
    filter.filteredProjects,
    true
  );

  let contextsResponse = useQuery(CONTEXTS_QUERY);
  const contexts = useMemo(() => buildObjects(contextsResponse), [contextsResponse]);

  const [responsiveTheme, setResponsiveTheme] = useState(programLTheme);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.s) {
      setResponsiveTheme(programSTheme);
    } else if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(programMTheme);
    } else {
      setResponsiveTheme(programLTheme);
    }
  }, [windowSize?.width]);

  return (
    <Layout>
      <ThemeProvider theme={responsiveTheme}>
        <SavedProjectsContainer>
          <Masonry
            columnsCount={responsiveTheme.MASONRY_COLUMNS}
            gutter={responsiveTheme.MASONRY_GUTTER}
          >
            {projects.map((project) => (
              <ProjectCell project={project} contexts={contexts}/>
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
