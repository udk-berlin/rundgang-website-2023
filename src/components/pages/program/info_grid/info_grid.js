import styled from "styled-components";

import InfoGridEvent from "@/components/pages/program/info_grid/event";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";

export default function InfoGrid({ project }) {
  return (
    <InfoGridContainer>
      <InfoGridEvent eventType="Installation" />
      <InfoGridCarousel project={project} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
  font-size: 0.7rem;
  font-weight: 500;
`;
