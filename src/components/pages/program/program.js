import { useEffect, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import Masonry from "react-responsive-masonry";
import { useQuery, gql } from "@apollo/client";

import { useFilter } from "@/providers/filter";

import ProjectCell from "@/components/pages/program/project_cell";
import Layout from "@/components/layout/layout";
import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/theme";
import {
  programLTheme,
  programMTheme,
  programSTheme,
} from "@/themes/pages/program";
import LoadingLayout from "@/components/layout/loading";

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

export default function Program() {
  let contextsResponse = useQuery(CONTEXTS_QUERY);
  const contexts = useMemo(() => buildObjects(contextsResponse), [contextsResponse]);

  const [responsiveTheme, setResponsiveTheme] = useState(programLTheme);
  const windowSize = useWindowSize();

  const filter = useFilter();

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
    <>
      {
        windowSize?.width ?
          (
            <Layout>
              <ThemeProvider theme={responsiveTheme}>
                <ProgramContainer>
                  <Masonry
                    columnsCount={responsiveTheme.MASONRY_COLUMNS}
                    gutter={responsiveTheme.MASONRY_GUTTER}>
                    {filter.filteredProjects.map((project) => (
                      <ProjectCell project={project} contexts={contexts} />
                    ))}
                  </Masonry>
                </ProgramContainer>
              </ThemeProvider>
            </Layout>
          ) : <LoadingLayout />

      }
    </>
  );
}

const ProgramContainer = styled.div`
  min-height: calc(
    100vh - var(--layout-header-height) - var(--layout-footer-height) +
      var(--border-width)
  );

  margin-bottom: -2px;
  padding: ${({ theme }) => theme.MASONRY_GUTTER};

  border-bottom: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
`;
