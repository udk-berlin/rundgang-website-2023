import { FormattedMessage } from "react-intl";
import styles from "@/styles/layout/header/Search.module.css";
import styled from "styled-components";

export default function HeaderSearch({ activateModal }) {
  return (
    <div className={styles.container}>
      <div></div>
      <SearchContainer onClick={activateModal}>
        <div>
          <FormattedMessage id={"search"} />
        </div>
      </SearchContainer>
      <div></div>
    </div>
  );
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  & > * {
    margin: 0 1rem;
    /* background-color: red; */
    flex: 1;
  }
`;
