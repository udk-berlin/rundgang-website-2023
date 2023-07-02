import { ReactSVG } from "react-svg";
import styled from "styled-components";

import { LocalizedLink } from "@/components/localization/links";

export default function HeaderBarR() {
  return (
    <LocalizedLink href={"/"}>
      <div>
        <SVG src={`/assets/svg/layout/r.svg`} />
      </div>
    </LocalizedLink>
  );
}

const SVG = styled(ReactSVG)`
  width: calc(0.75 * var(--layout-header-bar-container-height));
  height: calc(0.75 * var(--layout-header-bar-container-height));
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
