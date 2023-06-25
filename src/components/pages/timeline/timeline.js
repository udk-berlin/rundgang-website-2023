import styled from "styled-components";
import Layout from "@/components/layout/layout";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/locations";
import TimelineDays from '@/components/pages/timeline/days'
import TimelineHours from '@/components/pages/timeline/hours'

export default function Timeline({ locations, projects }) {
  return (
    <Layout>
      <TimelineContainer>
        <TimelineGrid />

        <TimelineContentContainer>
          <TimelineDays />
          <TimelineHours />
          <TimelineLocations locations={locations} projects={projects}/>
        </TimelineContentContainer>

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
  max-width: 100vw;
`;

const TimelineContentContainer = styled.div`
  position: relative;
  z-index: 0;

  margin-bottom: 100px;
`;
