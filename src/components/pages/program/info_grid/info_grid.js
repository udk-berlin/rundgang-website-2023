import styled from "styled-components";

import InfoGridFormat from "@/components/pages/program/info_grid/format";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";

export default function InfoGrid({ project }) {
  return (
    <InfoGridContainer>
      <InfoGridFormat project={project} />
      <InfoGridCarousel project={project} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
`;
