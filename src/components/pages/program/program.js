import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Masonry from "react-responsive-masonry";

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

export default function Program() {
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
    <Layout>
      <ThemeProvider theme={responsiveTheme}>
        <ProgramContainer>
          <Masonry
            columnsCount={responsiveTheme.MASONRY_COLUMNS}
            gutter={responsiveTheme.MASONRY_GUTTER}
          >
            {Object.values(filter.filteredProjects).map((project) => (
              <ProjectCell project={project} />
            ))}
          </Masonry>
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
  padding: ${({ theme }) => theme.padding};

  border-bottom: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
`;
