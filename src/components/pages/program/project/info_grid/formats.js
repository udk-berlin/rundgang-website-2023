import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { useSlider } from "@/providers/slider";
import { useData } from "@/providers/data/data";
import { LocationsLink } from "@/components/localization/links";

const formatToMarginLeftMapper = {
  default: "0",
  "Filmvorführung/Screening": "0",
  Projektpräsentation: "2",
  Klanginstallation: "6",
  Podiumsgespräch: "10",
  Beratungsangebot: "14",
  "offene Probe": "18",
  Installation: "22",
  "Open Space": "26",
  Ausstellung: "30",
  Performance: "34",
  Modenschau: "38",
  Workshop: "42",
  Gespräch: "46",
  Musical: "50",
  Theater: "54",
  Vortrag: "58",
  Konzert: "62",
  Führung: "66",
  Weitere: "70",
  Lesung: "74",
  Oper: "78",
  Tanz: "82",

};

export default function ProjectInfoGridFormats({ project, margin, forProjectPage = false, asOverlay = false }) {
  const { contexts } = useData(forProjectPage)
  const slider = useSlider();
  const formats = extractFormats(project, contexts)

  return (
    <InfoGridFormatsContainer asOverlay={asOverlay} slider={slider}>
      {formats.map(format => {
        return (
          <LocationsLink href={`/program/${format.id}`}>
            <InfoGridFormatLinkContainer margin={formatToMarginLeftMapper[format.name] && !margin ? formatToMarginLeftMapper[format.name] : formatToMarginLeftMapper.default}>
              <FormattedMessage id={format.name}/>
            </InfoGridFormatLinkContainer>
          </LocationsLink>
        )
      })}
    </InfoGridFormatsContainer>
  );
}

const InfoGridFormatsContainer = styled.div`
  max-height: ${({ asOverlay, slider, theme }) => asOverlay || slider.position >= theme.format.sliderIndex ? "fit-content" : "0px"};
  width: 100%;
  
  padding: ${({ asOverlay, slider, theme }) => asOverlay || slider.position >= theme.format.sliderIndex ? theme.box.padding : "0"};
  transition: all 0.3s;
  overflow: hidden;
`;

const InfoGridFormatLinkContainer = styled.div`
  width: max-content;
  
  margin-top:  ${({ theme }) => theme.borderWidth};
  margin-left: ${({ margin }) => margin}%;

  padding: ${({ theme }) => theme.box.padding};
  
  font-size: 0.7rem;
  font-weight: 500;
  color: black;
  
  background: white;
  outline: ${({ theme }) => theme.border};

  :hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }
`;

function extractFormats(project, contexts) {
  const formats = []

  contexts && project.parents?.forEach(parent => {
    if (parent && parent.id) {
      const context = contexts[parent.id]

      if (context && context.template && context.template === 'format-element') {
        formats.push(context)
      }
    }
  })

  return formats
}
