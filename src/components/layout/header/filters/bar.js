import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

export default function HeaderFiltersBar({
  showFilters,
  setShowFilters,
  disableFilter,
}) {
  return (
    <HeaderFiltersBarContainer>
      <div></div>
      <HeaderFiltersContainer
        disableFilter={disableFilter}
        onClick={() => (disableFilter ? null : setShowFilters(!showFilters))}
      >
        {disableFilter ? (
          <></>
        ) : (
          <HeaderFiltersTitleContainer>
            <SVG src={`/assets/svg/layout/search_icon.svg`} />
            <HeaderFiltersTitle>
              <FormattedMessage id={"search"} />
            </HeaderFiltersTitle>
          </HeaderFiltersTitleContainer>
        )}
      </HeaderFiltersContainer>
      <div></div>
    </HeaderFiltersBarContainer>
  );
}
const HeaderFiltersTitle = styled.div`
  height: calc(0.55 * var(--layout-header-search-container-height));
  margin-bottom: 2px;
`;

const HeaderFiltersTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.2rem;

  height: 100%;
`;

const SVG = styled(ReactSVG)`
  width: 0.8rem;
  height: 0.8rem;

  cursor: pointer;

  > div {
    width: 100%;
    height: 100%;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const HeaderFiltersBarContainer = styled.div`
  display: grid;
  grid-template-columns: 3vw auto 3vw;
  border-top: var(--border-width) solid var(--border-color);
  font-size: 0.85rem;

  height: var(--layout-header-search-container-height);

  > * {
    border-right: var(--border-width) solid var(--border-color);
  }

  > *:nth-last-child(1) {
    border: none;
  }
`;

const HeaderFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ disableFilter }) => (disableFilter ? "default" : "pointer")};

  & > * {
    margin: 0 1rem;
    flex: 1;
  }
`;
