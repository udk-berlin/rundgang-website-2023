import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { TimelineLink } from "@/components/localization/links";

export default function HeaderBarTimeline() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TimelineContainer>
      <TimelineLink>
        <Timeline
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          21. – 23.07.2023
          <span>
            &nbsp;/&nbsp;
            <FormattedMessage id="timeline" />
          </span>
        </Timeline>
      </TimelineLink>
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  font-weight: 600;
  justify-self: center;

  > a {
    color: var(--color-black);
  }
`;

const Timeline = styled.div`
  font-size: 1rem;
  font-weight: 600;
  justify-self: center;

  > span {
    font-weight: 500;
    display: ${({ isHovered }) => (isHovered ? "inline" : "none")};
    color: var(--color-pink);
  }
`;
