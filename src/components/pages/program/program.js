import { useEffect, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import Masonry from "react-responsive-masonry";

import { useFilter } from "@/providers/filter";

import ProgramProjectCell from "@/components/pages/program/project/cell";
import Layout from "@/components/layout/layout";
import { useWindowSize } from "@/providers/window_size";
import { breakpoints } from "@/themes/theme";
import {
  programLTheme,
  programMTheme,
  programSTheme,
} from "@/themes/pages/program";

export default function Program() {
  const [responsiveTheme, setResponsiveTheme] = useState(null);
  const windowSize = useWindowSize();
  const filter = useFilter();

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
    <Layout defaultSliderPosition={2}>
      {
        responsiveTheme ?
          <ThemeProvider theme={responsiveTheme}>
            <ProgramContainer>
              <Masonry
                columnsCount={responsiveTheme.MASONRY_COLUMNS}
                gutter={responsiveTheme.MASONRY_GUTTER}>
                {filter.filteredProjects.map((project, index) => (
                  <ProgramProjectCell project={project} index={index}/>
                ))}
              </Masonry>
            </ProgramContainer>
          </ThemeProvider> : <></>
      }
    </Layout>
  );
}

const ProgramContainer = styled.div`
  min-height: ${({ theme }) => theme.height};
  padding: ${({ theme }) => theme.padding};
`;
