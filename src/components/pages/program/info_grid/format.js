import styled from "styled-components";

import InfoGridItemLink from "@/components/pages/program/info_grid/item";
import { useSlider } from "@/providers/slider";

const formatToMarginLeftMapper = {
  Ausstellung: "73",
  Beratungsangebot: "62",
  "Filmvorführung/Screening": "1",
  Führung: "10",
  Installation: "15",
  Klanginstallation: "20",
  Konzert: "25",
  Gespräch: "30",
  Lesung: "35",
  Modenschau: "40",
  Musical: "45",
  "offene Probe": "50",
  "Open Space": "55",
  Oper: "60",
  Performance: "65",
  Podiumsgespräch: "27",
  Projektpräsentation: "48",
  Tanz: "85",
  Theater: "77",
  Vortrag: "8",
  Workshop: "32",
  Weitere: "42",
  default: "2",
};

export default function InfoGridFormat({ project, contexts, margin }) {
  const slider = useSlider();
  const formats = []

  project.parents.forEach(parent => {
    if (parent) {
      const context = contexts[parent.id]
      if (context) {
        if (context.template === 'format-element') {
          formats.push(context.name)
        }
      }
    }
  })

  return (
    <>
      <Container slider={slider}>
        {
          formats.map(format => {
            return (
              <InfoGridItemLink margin={format in formatToMarginLeftMapper && !margin ? formatToMarginLeftMapper[format] : formatToMarginLeftMapper.default}>
                {format}
              </InfoGridItemLink>
            )
          })
        }
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-height: ${(props) =>
    props.slider.position >= props.theme.format.sliderIndex ? "500px" : "0px"};
  overflow-y: hidden;
  transition: all 0.3s;
  padding: ${(props) =>
    props.slider.position >= props.theme.format.sliderIndex
      ? "0.40rem 0 0.2rem 0"
      : "0"};

  & > * {
    width: max-content;
  }
`;
