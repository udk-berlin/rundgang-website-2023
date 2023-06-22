import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export default function HeaderFiltersBar({ showFilters, setShowFilters }) {
  return (
    <HeaderFiltersBarContainer>
      <div></div>
      <HeaderFiltersContainer onClick={() => setShowFilters(!showFilters)}>
        <div>
          <FormattedMessage id={"search"} />
        </div>
      </HeaderFiltersContainer>
      <div></div>
    </HeaderFiltersBarContainer>
  );
}

const HeaderFiltersBarContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  border-top: var(--border-width) solid var(--border-color);
  font-size: 0.8rem;

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
  cursor: pointer;

  & > * {
    margin: 0 1rem;
    flex: 1;
  }
`;
