import styled from "styled-components";

import InfoGridEvent from "@/components/pages/program/info_grid/event";
import InfoGridCarousel from "@/components/pages/program/info_grid/carousel";

export default function InfoGrid({ project }) {
  return (
    <InfoGridContainer>
      <InfoGridEvent eventType="Beratungsangebot" />
      <InfoGridCarousel project={project} />
    </InfoGridContainer>
  );
}

export const InfoGridContainer = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: 500;

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;
