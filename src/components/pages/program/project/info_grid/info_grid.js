import styled from "styled-components";

import InfoGridFormats from "@/components/pages/program/project/info_grid/formats";
import ProjectInfoGridCarousel from "@/components/pages/program/project/info_grid/carousel";

export default function ProjectInfoGrid({ project, forProjectPage = false }) {
  return (
    <InfoGridContainer>
      <InfoGridFormats project={project} forProjectPage={forProjectPage} />
      <ProjectInfoGridCarousel project={project} forProjectPage={forProjectPage} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
`;
