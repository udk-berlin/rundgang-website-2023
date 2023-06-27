import TimelineHeader from "@/components/pages/timeline/header/header";
import Layout from "@/components/layout/layout";
import TimelineContent from "@/components/pages/timeline/content";

const NUMBER_OF_SLIDER_STATES = 3

export default function Timeline() {
  return (
    <Layout numberOfSliderStates={NUMBER_OF_SLIDER_STATES}>
      <TimelineHeader />
      <TimelineContent />
    </Layout>
  );
}
