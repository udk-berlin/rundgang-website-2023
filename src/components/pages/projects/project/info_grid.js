import styled from "styled-components";

import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import InfoGridFormat from "@/components/pages/program/info_grid/format";
import { InfoGridContainer } from "@/components/pages/program/info_grid/info_grid";
import { useSlider } from "@/providers/slider";
import { useEffect, useRef } from "react";
import { convertRemToPixels } from "@/components/pages/program/info_grid/item";

export default function ProjectInfoGrid({ project, contexts }) {
  return (
    <ProjectInfoGridContainer>
      <FormatDateContainer>
        <InfoGridFormat project={project} contexts={contexts} />
        <InfoGridDate project={project} />
      </FormatDateContainer>
      <InfoGridLocation project={project} />
      <InfoGridContext project={project} />
    </ProjectInfoGridContainer>
  );
}

const ProjectInfoGridContainer = styled(InfoGridContainer)`
  display: flex;
  align-items: start;
  padding: 1.5rem 1rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  cursor: default;

  & > * {
    flex: 0 0 33%;
  }

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;

const FormatDateContainer = styled.div`
  /* max-width: ${(props) =>
    props.slider.position >= props.theme.format.sliderIndex
      ? "500px"
      : "0px"}; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:first-child {
    align-items: start;
  }

  & > :nth-child(2) {
    width: 100%;
  }
`;
