import styled from "styled-components";
import Layout from "@/components/layout/layout";
import { scaleLinear } from "d3-scale";
import TimelineHeader from "@/components/pages/timeline/header/header";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineScale from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/location/locations";

const FIRST_TIME = 1658564000;
const LAST_TIME =  1658696400;

export const TIMELINE_WIDTH = 6000;
const TIMELINE_PADDING_LEFT =  0;

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
    .domain([FIRST_TIME, LAST_TIME])
    .range([TIMELINE_PADDING_LEFT, TIMELINE_WIDTH]);

  const locWidth = scaleX(1658564000);

  return (
    <Layout>
      {/*<TimelineContainer>*/}
      {/*  <TimelineHeader scaleX={scaleX}/>*/}
      {/*</TimelineContainer>*/}

      <TimelineContainerOld>
        <TimelineInnerContainerOld>
          <TimelineGrid scaleX={scaleX} />

          <TimelineLocations
            scaleX={scaleX}
            locWidth={locWidth}
            // houseInfo={uiStore.houseInfo}
            // timeTableEvents={uiStore.filteredEvents}
          />

        </TimelineInnerContainerOld>
      </TimelineContainerOld>
    </Layout>
  );
}

const TimelineContainer = styled.div`
  overflow-x: scroll;
  
  width: 100vw;
  max-width: 100vw;
  
  height: 100vh;
  min-height: var(--locations-map-height);
`;

const TimelineInnerContainerOld = styled.div`
  position: relative;
  
  display: flex;
  //justify-content: space-between;
  
  overflow-x: auto;
  overflow-y: visible;
  
  width: 100%;
  height: fit-content;
  //height: 100px;
`;

const TimelineContainerOld = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: auto;
  
  //display: grid;
  //gap: 16px 16px;
  //grid-template-columns: 1fr;
  //margin-bottom: 30px;
  height: fit-content;
  //min-height: calc(100vh - 200px);
  //-webkit-touch-callout: none; /* iOS Safari */
  //-webkit-user-select: none; /* Safari */
  //-khtml-user-select: none; /* Konqueror HTML */
  //-moz-user-select: none; /* Old versions of Firefox */
  //-ms-user-select: none; /* Internet Explorer/Edge */
  //user-select: none;
  overflow-y: auto;
  //scrollbar-width: thin;
  //scrollbar-color: black #d9d9d9;
  //&::selection {
  //  background: black;
  //  color: #e2ff5d;
  //}
  //&::-webkit-scrollbar {
  //  width: 8px;
  //  height: 8px;
  //}
  //&::-webkit-scrollbar-track {
  //  background-color: #d9d9d9;
  //  outline: 1px solid #d9d9d9;
  //}
  //&::-webkit-scrollbar-thumb {
  //  background-color: black;
  //  outline: 1px solid black;
  //}
`;