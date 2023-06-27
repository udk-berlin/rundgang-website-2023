import { FormattedMessage } from "react-intl";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { useFilter, useFilterDispatch }  from "@/providers/filter";

// const FILTERS = {
//   de: [
//     {
//       title: "Formate",
//       filters: [
//         "Ausstellung",
//         "Beratungsangebot",
//         "DJ-Set",
//         "Filmvorführung/Screening",
//         "Führung",
//         "Installation",
//         "(Klanginstallation)",
//         "Konzert",
//         "Gespräch",
//         "Lesung",
//         "Modenschau",
//         "Musical",
//         "offene Probe",
//         "Open Space",
//         "Oper",
//         "Performance",
//         "Podiumsgespräch",
//         "Projektpräsentation",
//         "Tanz",
//         "Theater",
//         "Vortrag",
//         "Workshop",
//         "Weitere",
//       ],
//     },
//   ],
// };

export default function HeaderFilters({ showFilters, setShowFilters }) {
  const filter = useFilter();
  const dispatch = useFilterDispatch();
  const filterCategories = [
    {id: 'faculties.centres', dispatchType: 'filter-faculties-centres', filters: filter.facultiesAndCenters},
    {id: 'formats', dispatchType: 'filter-formats', filters: filter.facultiesAndCenters}
  ]

  const getClickHandler = (id, dispatchType) => {
    return () => {
      dispatch(
        {
          type: dispatchType,
          id: id,
        })
    }
  }

  return (
    <HeaderFiltersContainer showFilters={showFilters}>
      <HeaderFiltersClose
        src="/assets/svg/close.svg"
        onClick={() => setShowFilters(false)}
      />
      {filterCategories.map((category) => (
        <CategoryContainer>
          <CategoryNameContainer>
            <FormattedMessage id={category.id}/>
          </CategoryNameContainer>
          <FiltersContainer>
            {Object.values(category.filters).map((f) => (
              <FilterNameContainer key={f.id} onClick={getClickHandler(f.id, category.dispatchType)} selected={filter.facultyOrCenter === f.id}>{f.name}</FilterNameContainer>
            ))}
          </FiltersContainer>
        </CategoryContainer>
      ))}
    </HeaderFiltersContainer>
  );
}

const HeaderFiltersContainer = styled.div`
  display: ${({ showFilters }) => showFilters ? "block" : "none"};

  position: absolute;
  top: calc(
    var(--layout-header-bar-container-height) +
      var(--layout-header-search-container-height) + 1 * var(--border-width)
  );

  margin-right: calc(2rem + var(--border-width));
  margin-left: 2rem;
  
  width: var(--layout-header-filters-width);
  min-width: var(--layout-header-filters-width);
  max-width: var(--layout-header-filters-width);

  outline: var(--border-width) solid var(--border-color);

  padding-bottom: 1rem;

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

const CategoryContainer = styled.div`
  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  padding: 1rem 1rem 0 1rem;
`;

const CategoryNameContainer = styled.div`
  display: inline-block;
  
  padding: var(--info-grid-padding);
  border: var(--info-border-width) solid var(--info-border-color);

  background: var(--color-black);
  color: var(--color-white);

  cursor: default;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterNameContainer = styled.div`
  margin-right: calc(var(--info-border-width) * -1);

  padding: var(--info-grid-padding);

  border: var(--info-border-width) solid var(--info-border-color);
  
  background: ${({ selected }) => selected ? 'var(--color-pink)' : 'var(--color-white)'};
  color:  ${({ selected }) => selected ? 'var(--color-white)' : 'var(--color-black)'};
  
  cursor: pointer;
  
  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;