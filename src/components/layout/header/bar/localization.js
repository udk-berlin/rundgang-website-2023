import React from "react";
import styled from "styled-components";

import { SwitchLocalizationLink } from "@/components/localization/links";

export default function HeaderBarLocalization({ classname }) {
  return (
    <LocalizationContainer className={classname}>
      <SwitchLocalizationLink />
    </LocalizationContainer>
  );
}

const LocalizationContainer = styled.div`
  display: flex;
  align-items: center;
`;
