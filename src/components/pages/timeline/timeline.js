import styled from "styled-components";
import Layout from "@/components/layout/layout";
import { scaleLinear } from "d3-scale";
import TimelineHeader from "@/components/pages/timeline/header/header";
import TimelineScale from "@/components/pages/timeline/scale";
import TimelineLocations from "@/components/pages/timeline/locations";

export const times = [
  1658566800, 1658570400, 1658574000, 1658577600, 1658581200, 1658584800,
  1658588400, 1658592000, 1658595600, 1658599200, 1658602800, 1658606400,
  1658610000, 1658613600, 1658617200, 1658620800, 1658624400, 1658628000,
  1658631600, 1658635200, 1658638800, 1658642400, 1658646000, 1658649600,
  1658653200, 1658656800, 1658660400, 1658664000, 1658667600, 1658671200,
  1658674800, 1658678400, 1658682000, 1658685600, 1658689200, 1658692800,
  1658696400,
];

export default function Timeline({ projects }) {
  const scaleX = scaleLinear()
    .domain([1658564000, 1658696400])
    .range([0, 6000]);

  const locWidth = scaleX(1658564000);

  return (
    <Layout>
      <TimelineHeader />


      <TimelineContainer>
        <TimelineScale scaleX={scaleX} times={times} />
        {/*<TimelineLocations*/}
        {/*  scaleX={scaleX}*/}
        {/*  locWidth={locWidth}*/}
        {/*  // houseInfo={uiStore.houseInfo}*/}
        {/*  // timeTableEvents={uiStore.filteredEvents}*/}
        {/*/>*/}
      </TimelineContainer>
    </Layout>
  );
}

const TimelineContainer = styled.div`
  width: 100%;
  height: fit-content;
  overflow-x: auto;
  overflow-y: visible;
  justify-content: space-between;
  position: relative;
  display: flex;
`;