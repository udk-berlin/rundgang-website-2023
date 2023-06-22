import InfoGridItemLink, {
  InfoGridItem,
} from "@/components/pages/program/info_grid/item";
import { useIntl } from "react-intl";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

const FILTERS = {
  de: [
    {
      title: "Fakultäten und Zentren",
      filters: [
        "Fakultät Bildende Kunst",
        "Fakultät Gestaltung",
        "Fakultät Musik",
        "Fakultät Darstellende Kunst",
        "Zentralinstitut für Weiterbildung (ZIW)",
        "Jazz-Institut Berlin (JIB)",
        "Hochschulübergreifendes Zentrum Tanz Berlin (HZT)",
        "Berlin Career College",
      ],
    },
    {
      title: "Formate",
      filters: [
        "Ausstellung",
        "Beratungsangebot",
        "DJ-Set",
        "Filmvorführung/Screening",
        "Führung",
        "Installation",
        "(Klanginstallation)",
        "Konzert",
        "Gespräch",
        "Lesung",
        "Modenschau",
        "Musical",
        "offene Probe",
        "Open Space",
        "Oper",
        "Performance",
        "Podiumsgespräch",
        "Projektpräsentation",
        "Tanz",
        "Theater",
        "Vortrag",
        "Workshop",
        "Weitere",
      ],
    },
  ],
};

export default function HeaderFilters({ showFilters, setShowFilters }) {
  const language = useIntl();
  let filters = FILTERS.de;
  if (language.locale === "en" && "en" in FILTERS) {
    filters = FILTERS.en;
  }

  return (
    <HeaderFiltersContainer showFilters={showFilters}>
      <HeaderFiltersClose src="/assets/svg/close.svg" onClick={() => setShowFilters(false)} />
      {filters.map((category) => (
        <HeaderFiltersCategoryContainer>
          <HeaderFiltersCategoryTitle>{category.title}</HeaderFiltersCategoryTitle>
          <HeaderFiltersCategoryBody>
            {category.filters.map((filter) => (
              <InfoGridItemLink>{filter}</InfoGridItemLink>
            ))}
          </HeaderFiltersCategoryBody>
        </HeaderFiltersCategoryContainer>
      ))}
    </HeaderFiltersContainer>
  );
}

const HeaderFiltersContainer = styled.div`
  display: ${(props) => (props.showFilters ? "block" : "none")};
  
  position: absolute;
  top: calc(
          var(--layout-header-bar-container-height) +
          var(--layout-header-search-container-height) + 1 * var(--border-width)
  );
  
  height: var(--locations-map-height);
  min-height: var(--locations-map-height);
  max-height: var(--locations-map-height);
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`;

const HeaderFiltersClose = styled(ReactSVG)`
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  width: 30px;
  cursor: pointer;
  & svg {
    fill: #fff;
  }
`;

const HeaderFiltersCategoryContainer = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 1rem 2rem;
`;

const HeaderFiltersCategoryTitle = styled(InfoGridItem)`
  background-color: #000;
  color: var(--color-white);
  display: inline-block;
`;

const HeaderFiltersCategoryBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


