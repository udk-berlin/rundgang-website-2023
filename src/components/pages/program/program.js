import { useEffect, useState } from "react";
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

const FILMS_QUERY = gql`
  {
    items {
      name
      id
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

export default function Program() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  //if (loading) return "Loading...";
  //if (error) return <pre>{error.message}</pre>;

  const [responsiveTheme, setResponsiveTheme] = useState(programLTheme);
  const windowSize = useWindowSize();

  // const filter = useFilter();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.s) {
      setResponsiveTheme(programSTheme);
    } else if (windowSize?.width <= breakpoints.m) {
      setResponsiveTheme(programMTheme);
    } else {
      setResponsiveTheme(programLTheme);
    }
  }, [windowSize?.width]);

  console.log(data);
  return (
    <Layout>
      <ThemeProvider theme={responsiveTheme}>
        <ProgramContainer>
          {loading || error ? (
            <div>Loading...</div>
          ) : (
            <Masonry
              columnsCount={responsiveTheme.MASONRY_COLUMNS}
              gutter={responsiveTheme.MASONRY_GUTTER}
            >
              {data.items.map((project) => (
                <ProjectCell project={project} />
              ))}
            </Masonry>
          )}
        </ProgramContainer>
      </ThemeProvider>
    </Layout>
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
