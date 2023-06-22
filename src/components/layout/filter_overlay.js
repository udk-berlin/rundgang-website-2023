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

export default function FilterOverlay({ active, hideModal }) {
  const language = useIntl();
  let filters = FILTERS.de;
  if (language.locale === "en" && "en" in FILTERS) {
    filters = FILTERS.en;
  }

  return (
    <FilterOverlayContainer active={active}>
      <FilterOverlayClose src="/assets/svg/close.svg" onClick={hideModal} />
      {filters.map((filter) => (
        <CategoryContainer>
          <FilterCategoryTitle>{filter.title}</FilterCategoryTitle>
          <CategoryBody>
            {filter.filters.map((filter) => (
              <InfoGridItemLink>{filter}</InfoGridItemLink>
            ))}
          </CategoryBody>
        </CategoryContainer>
      ))}
    </FilterOverlayContainer>
  );
}
const FilterOverlayContainer = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  position: fixed;
  top: calc(
    var(--layout-header-bar-container-height) +
      var(--layout-header-search-container-height) + 4px
  );
  left: 1px;
  margin-right: var(--border-width);
  backdrop-filter: blur(8px);
`;

const CategoryContainer = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 1rem 2rem;
`;

const FilterCategoryTitle = styled(InfoGridItem)`
  background-color: #000;
  color: var(--color-white);
  display: inline-block;
`;

const CategoryBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterOverlayClose = styled(ReactSVG)`
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  width: 30px;
  cursor: pointer;
  & svg {
    fill: #fff;
  }
`;
