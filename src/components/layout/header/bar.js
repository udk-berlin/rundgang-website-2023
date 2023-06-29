import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import styles from "@/styles/layout/header/Bar.module.css";
import {
  SavedProjectsLink,
  SwitchLocalizationLink,
} from '@/components/localization/links'
import { TimelineLink, LocationsLink } from "@/components/localization/links";
import { useSavedProjects } from '@/providers/projects/saved'

export default function HeaderBar() {
  const [timelineIsHovered, setTimelineIsHovered] = useState(false);
  const savedProjects = useSavedProjects()

  return (
    <HeaderBarContainer>
      <LocationsLink>
        <SVGHover
          pathPassive="/assets/svg/layout/map_passive.svg"
          pathActive="/assets/svg/layout/map_active.svg"
        />
      </LocationsLink>
      <div className={styles.timeline}>
        <TimelineLink>
          <Timeline
            onMouseEnter={() => setTimelineIsHovered(true)}
            onMouseLeave={() => setTimelineIsHovered(false)}
            show={timelineIsHovered}
          >
            21. – 23.07.2023
            <span>
              &nbsp;/&nbsp;
              <FormattedMessage id="timeline" />
            </span>
          </Timeline>
        </TimelineLink>
      </div>
      <SavedProjectsLink>
        {savedProjects && savedProjects.length}
        <SVGHover
          pathPassive="/assets/svg/layout/shop_passive.svg"
          pathActive="/assets/svg/layout/shop_hover.svg"
        />
      </SavedProjectsLink>
      <div className={styles.localization}>
        <SwitchLocalizationLink />
      </div>
    </HeaderBarContainer>
  );
}

export function SVGHover({ pathPassive, pathActive }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <SVGHoverWrapper
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && <SVGHoverContainer src={pathActive} />}
      {!isShown && <SVGHoverContainer src={pathPassive} />}
    </SVGHoverWrapper>
  );
}

const HeaderBarContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr 1fr;
  align-items: center;

  height: var(--layout-header-bar-container-height);
  padding: 0 0.8rem;
`;

const SVGHoverContainer = styled(ReactSVG)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const SVGHoverWrapper = styled.div`
  justify-self: start;
`;

const Timeline = styled.div`
  font-weight: 600;
  justify-self: center;
  & > a {
    color: black;
  }

  & > span {
    display: ${(props) => (props.show ? "inline" : "none")};
    color: var(--color-pink);
  }
`;
