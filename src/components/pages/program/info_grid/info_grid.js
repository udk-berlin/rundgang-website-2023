import styled from "styled-components";

import InfoGridFormat from "@/components/pages/program/info_grid/format";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";

export default function InfoGrid({ project, contexts }) {
  return (
    <InfoGridContainer>
      <InfoGridFormat project={project} contexts={contexts} />
      <InfoGridCarousel project={project} contexts={contexts} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
`;
