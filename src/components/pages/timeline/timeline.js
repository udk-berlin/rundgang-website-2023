import styled from "styled-components";
import Layout from "@/components/layout/layout";
import TimelineHeader from "@/components/pages/timeline/header/header";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/location/locations";

export default function Timeline({ projects }) {
  return (
    <Layout>
      {/*<TimelineContainer>*/}
      {/*  <TimelineHeader scaleX={scaleX}/>*/}
      {/*</TimelineContainer>*/}

      <TimelineContainerOld>
        <TimelineInnerContainerOld>
          <TimelineGrid />

          <TimelineLocations
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