import styled from "styled-components";
import Layout from "@/components/layout/layout";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/locations";

import TimelineHeader from "@/components/pages/timeline/header/header";
import { useEffect, useRef } from "react";

export default function Timeline({ locations }) {
  const ref = useRef(null);

  // useEffect(() => {
  //   window.document.getElementById('timeline-header').addEventListener('scroll', (e) => {
  //     ref.current?.scrollTo({left: window.document.getElementById('timeline-header').scrollLeft})
  //   })}, [])

  return (
    <Layout numberOfSliderStates={3}>
      <TimelineHeader />
      <TimelineContainer ref={ref} id={'timeline'}>
        <TimelineGrid />
        <TimelineLocations locations={locations} />
      </TimelineContainer>
    </Layout>
  );
}

const TimelineContainer = styled.div`
  position: relative;
  
  display: flex;
  
  overflow-x: auto;
  overflow-y: auto;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  height: calc(100vh - var(--layout-header-height) - var(--layout-footer-height));
  min-height: calc(100vh - var(--layout-header-height) - var(--layout-footer-height));

  scrollbar-color: var(--color-dark-gray) var(--color-white);
  &::selection {
    background: var(--color-dark-gray);
    color: var(--color-pink);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-pink);
    outline: var(--border-width) solid var(--color-pink);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dark-gray);
    outline: var(--border-width) solid var(--color-dark-gray);
  }

  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: var(--color-black);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-dark-gray);
    -webkit-border-radius: 0;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: #000;
  }
`;
