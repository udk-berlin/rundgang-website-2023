import { SliderContext } from "@/components/contexts/slider_context";
import Collapsible from "@/components/pages/program/info_grid/collapsible";
import { useContext } from "react";
import styled from "styled-components";

export default function ProjectTitle({ project, fontSize = 2.5 }) {
  const slider = useContext(SliderContext);
  return (
    <ProjectTitleContainer fontSize={fontSize} slider={slider} idx={1}>
      <DropCap fontSize={fontSize}>{project.name.substring(0, 1)}</DropCap>
      {project.name.substring(1)}
    </ProjectTitleContainer>
  );
}

const ProjectTitleContainer = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  text-transform: uppercase;
  line-height: 1;
  display: inline-block;

  max-height: ${(props) => (props.slider >= 1 ? "500px" : "0px")};
  overflow-y: hidden;
  transition: all 0.3s;

  padding-top: ${(props) => (props.slider >= 1 ? "0.25rem" : "0")};
`;

const DropCap = styled.span`
  float: left;
  font-family: Gabriella;
  font-size: ${(props) => props.fontSize * 1.1}rem;
  color: var(--color-pink);

  line-height: 1;
  margin-top: 0.15em;
  /* margin-left: -0.05em; */
  /* margin: 0.1em 0 0.1em 0em; */
  /* padding: 0.1em 0.1em 0.1em 0; */

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    margin-top: -0.2em;
  }
  &:after {
    margin-bottom: -0.15em;
  }
`;
