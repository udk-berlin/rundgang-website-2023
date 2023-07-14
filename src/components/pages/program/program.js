import { useEffect, useState, useMemo } from "react";
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
import LoadingLayout from "@/components/layout/loading";

export default function Program({ setIsLinkClicked }) {
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
            <Layout setIsLinkClicked={setIsLinkClicked} defaultSliderPosition={2}>
              <ThemeProvider theme={responsiveTheme}>
                <ProgramContainer>
                  <Masonry
                    columnsCount={responsiveTheme.MASONRY_COLUMNS}
                    gutter={responsiveTheme.MASONRY_GUTTER}>
                    {filter.filteredProjects.map((project, index) => (
                      <ProjectCell project={project} index={index}/>
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
