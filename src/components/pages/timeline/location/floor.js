import styled from "styled-components";

import { FormattedMessage } from 'react-intl'
import { BOX_HEIGHT } from "@/components/pages/timeline/constants";

export default function TimelineLocationFloor() {

  const floor = {
    name: "0",
    id: '0'
  }

  return (
    <FloorContainer key={floor.id}>
      <FormattedMessage id={'floor'} />: {floor.name}
    </FloorContainer>
  );
}

const FloorContainer = styled.div`
  position: sticky;
  z-index: 3;
  left: var(--calender-floor-left);
  top: 0;
  
  display: flex;
  align-items: center;

  height: ${BOX_HEIGHT}px;
  min-height: ${BOX_HEIGHT}px;
  max-height: ${BOX_HEIGHT}px;
  width: var(--calender-floor-width);

  padding: var(--info-grid-padding);
  
  border: var(--border-width) solid var(--border-color);
  border-top: 0;

  background: var(--color-white);

  font-size: var(--info-grid-font-size);
  font-weight: var(--info-grid-font-weight);
  color: var(--color-black);

  :hover {
    background: var(--color-pink);
    color: var(--color-white);
  }
`;
