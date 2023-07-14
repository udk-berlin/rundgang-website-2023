import { FormattedMessage } from "react-intl";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { useFilter, useFilterDispatch } from "@/providers/filter";
import { useData } from "@/providers/data/data";

export default function HeaderFilters({ showFilters, setShowFilters }) {
  const { projects, locations} = useData()
  const filter = useFilter();
  const dispatch = useFilterDispatch();
  const filterCategories = [
    {
      nameFormattedMessageId: "faculties.centres",
      filterAllFormattedMessageId: "faculties.centres.all",
      filterDispatchType: "filter-structure",
      filterAllDispatchType: "all-structures",
      filters: filter.structureFilters,
      selected: (f) => {
        return filter.structure === f.id;
      },
      nonSelected: () => {
        return !filter.structure;
      },
    },
    {
      nameFormattedMessageId: "formats",
      filterAllFormattedMessageId: "formats.all",
      filterDispatchType: "filter-format",
      filterAllDispatchType: "all-formats",
      filters: filter.formatFilters,
      selected: (f) => {
        return filter.format === f.id;
      },
      nonSelected: () => {
        return !filter.format;
      },
    },
  ];

  return (
    <HeaderFiltersContainer showFilters={showFilters}>
      <HeaderFiltersClose
        src="/assets/svg/close.svg"
        onClick={() => setShowFilters(false)}
      />
      {filterCategories.map((category) => (
        <CategoryContainer>
          <CategoryNameContainer>
            <FormattedMessage id={category.nameFormattedMessageId} />
          </CategoryNameContainer>
          <FiltersContainer>
            <FilterNameContainer
              key={-1}
              onClick={() => {
                dispatch({ type: category.filterAllDispatchType, projects: projects, locations: locations });
              }}
              selected={category.nonSelected()}
            >
              <FormattedMessage id={category.filterAllFormattedMessageId} />
            </FilterNameContainer>
            {Object.values(category.filters).map((f) => (
              <FilterNameContainer
                key={f.id}
                id={f.id}
                onClick={() =>
                  dispatch({ type: category.filterDispatchType, id: f.id, projects: projects, locations: locations})
                }
                selected={category.selected(f)}
              >
                {f.name}
              </FilterNameContainer>
            ))}
          </FiltersContainer>
        </CategoryContainer>
      ))}
    </HeaderFiltersContainer>
  );
}

const HeaderFiltersContainer = styled.div`
  display: ${({ showFilters }) => (showFilters ? "block" : "none")};

  position: absolute;
  top: calc(
    var(--layout-header-bar-container-height) +
      var(--layout-header-search-container-height) + 1 * var(--border-width)
  );

  margin-right: 3vw;
  margin-left: 3vw;

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
  margin-top: 1rem;
  margin-right: 1rem;

  width: 1rem;

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

  margin-bottom: calc(var(--border-width) * -1);
  padding: var(--info-grid-padding);

  border: var(--info-border-width) solid var(--info-border-color);

  background: ${({ selected }) =>
    selected ? "var(--color-pink)" : "var(--color-white)"};
  color: ${({ selected }) =>
    selected ? "var(--color-white)" : "var(--color-black)"};

  cursor: pointer;

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;
