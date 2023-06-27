import TimelineHeader from "@/components/pages/timeline/header/header";
import Layout from "@/components/layout/layout";
import TimelineContent from "@/components/pages/timeline/content";

export default function Timeline({ locations }) {
  return (
    <Layout numberOfSliderStates={3}>
      <TimelineHeader />
      <TimelineContent locations={locations} />
    </Layout>
  );
}
