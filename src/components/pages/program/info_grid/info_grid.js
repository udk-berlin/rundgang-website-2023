import styled from "styled-components";

import InfoGridFormat from "@/components/pages/program/info_grid/format";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";

export default function InfoGrid({ project, forProjectPage = false }) {
  return (
    <InfoGridContainer>
      <InfoGridFormat project={project} forProjectPage={forProjectPage} />
      <InfoGridCarousel project={project} forProjectPage={forProjectPage} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
`;
