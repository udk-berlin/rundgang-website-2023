import React, {useEffect, useMemo, useState} from "react";
import useSWR from "swr";
import styled, { ThemeProvider } from "styled-components";

import ProjectAuthors from "@/components/pages/projects/project/authors";
import ProjectTitle from "@/components/pages/projects/project/title";
import Layout from "@/components/layout/layout";

import ProjectMedia from "@/components/pages/projects/project/media/media";

import InfoGrid from "@/components/pages/program/info_grid/info_grid";
import { ProjectText } from "@/components/pages/projects/project/text";
import {getRenderJsonUrl, fetcher, getUrl} from "@/utils/api/api";
import useWindowSize from "@/hooks/window_size";
import {
  projectBreakpoints,
  projectLTheme,
  // projectMTheme,
  projectSTheme,
} from "@/themes/pages/project";
import {gql, useQuery} from "@apollo/client";

function buildObjects(res) {
  const obj = {}

  if (res && res.data && res.data.contexts) {
    res.data.contexts.forEach(context => {
      obj[context.id] = context
    })
  }

  return obj
}

const PROJECT_QUERY = gql`
  {
    item(id: "!NkmohVQCmZEmeakBHt:content.udk-berlin.de") {
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

export default function Project({ id }) {
  const [responsiveTheme, setResponsiveTheme] = useState(projectLTheme);
  const [infoGridPos, setInfoGridPos] = useState(true);
  const windowSize = useWindowSize();

  const project = useQuery(PROJECT_QUERY);
  let contextsResponse = useQuery(CONTEXTS_QUERY);
  const contexts = useMemo(() => buildObjects(contextsResponse), [contextsResponse]);

  const projectForDescription = useSWR(
    getUrl(id),
    fetcher
  );

  const media = useSWR(
    getRenderJsonUrl(id),
    fetcher
  );

  useEffect(() => {
    if (windowSize?.width <= projectBreakpoints.s) {
      setResponsiveTheme(projectSTheme);
      setInfoGridPos(false);
    // } else if (windowSize?.width <= projectBreakpoints.m) {
    //   setResponsiveTheme(projectMTheme);
    //   setInfoGridPos(false);
    } else {
      setResponsiveTheme(projectLTheme);
      setInfoGridPos(true);
    }
  }, [windowSize?.width]);

  return (
    <Layout
      disableFilter={true}
      disableSlider={infoGridPos}
      numberOfSliderStates={5}
    >
      <ThemeProvider theme={responsiveTheme}>
        <ProjectContainer>
          {
            project.loading || project.error ?
              (<div>Loading...</div>) :
              (
                <>
                  <ProjectMedia project={project.data.item} media={media?.data} contexts={contexts} infoGridPos={infoGridPos} />
                  <InfoContainer>
                    <ProjectTitle project={project.data.item} link={false} />
                    <ProjectAuthors project={project.data.item} fontSize={1} />
                    {infoGridPos ? <></> : <InfoGrid project={project.data.item} contexts={contexts} />}
                    <ProjectText project={project.data.item} projectForDescription={projectForDescription} media={media?.data} />
                  </InfoContainer>
                </>
              )
          }
        </ProjectContainer>
      </ThemeProvider>
    </Layout>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => theme.flexDirection};
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.info.padding};
  flex: 4;
  height: calc(
    100vh - var(--layout-header-search-container-height) -
      calc(var(--layout-header-bar-container-height) * 2)
  );
  overflow: scroll;
`;
