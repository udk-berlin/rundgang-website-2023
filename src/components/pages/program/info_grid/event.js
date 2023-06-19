import styled from "styled-components";

import InfoGridItemLink, {
  InfoGridItem,
} from "@/components/pages/program/info_grid/item";

const eventTypeToMarginLeftMapper = {
  Ausstellung: "73%",
  Beratungsangebot: "62%",
  DJSet: "80%",
  Filmvorführung: "1%",
  Führung: "10%",
  Installation: "15%",
  Klanginstallation: "20%",
  Konzert: "25%",
  Gespräch: "30%",
  Lesung: "35%",
  Modenschau: "40%",
  Musical: "45%",
  offeneProbe: "50%",
  OpenSpace: "55%",
  Oper: "60%",
  Performance: "65%",
  Podiumsgespräch: "27%",
  Projektpräsentation: "48%",
  Tanz: "85%",
  Theater: "77%",
  Vortrag: "8%",
  Workshop: "32%",
  Weitere: "42",
  default: "2px",
};

export default function InfoGridEvent({ eventType, margin }) {
  return (
    <InfoGridItemLink
      margin={
        eventType in eventTypeToMarginLeftMapper && !margin
          ? eventTypeToMarginLeftMapper[eventType]
          : eventTypeToMarginLeftMapper.default
      }
    >
      {eventType}
    </InfoGridItemLink>
  );
}
