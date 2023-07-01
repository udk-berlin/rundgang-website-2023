import { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";

import { useSlider, useSliderDispatch } from "@/providers/slider";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/location/locations";
import { DAYS, NUMBER_OF_HOURS } from "@/components/pages/timeline/constants";

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useWindowSize from '@/hooks/window_size'

export default function TimelineContent() {
  const windowSize = useWindowSize()
  const width = windowSize.width
  const language = useIntl();
  const slider = useSlider()
  const dispatch = useSliderDispatch()
  const ref = useRef(null);
  const days = language.locale === 'en' ? DAYS.en : DAYS.de

  const handleScroll = () => {
    const timelineWidth = window.innerWidth * 2
    const widthPerHour = timelineWidth / NUMBER_OF_HOURS

    let timeout = 0
    if (slider.origin === 'click' || slider.origin === 'slider') {
      timeout = 2000
    }

    setTimeout((e) => {
      const scrollLeft = ref.current?.scrollLeft

      if (scrollLeft <= days[0].scrollXFactor * widthPerHour && (days[1].scrollXFactor * widthPerHour - window.innerWidth / 2) > scrollLeft + 1) {
        dispatch({
          type: 'update',
          position: 0,
          origin: 'scroll'
        })
      } else if ((scrollLeft > days[0].scrollXFactor * widthPerHour || ((days[1].scrollXFactor * widthPerHour - window.innerWidth / 2) <= scrollLeft + 1)) && scrollLeft <= days[1].scrollXFactor * widthPerHour && scrollLeft < timelineWidth - window.innerWidth ) {
        dispatch({
          type: 'update',
          position: 1,
          origin: 'scroll'
        })
      } else {
        dispatch({
          type: 'update',
          position: 2,
          origin: 'scroll'
        })
      }
    }, timeout)
  }

  useEffect(() => {
    const widthPerHour = width * 2 / NUMBER_OF_HOURS

    if (slider.origin !== 'scroll') {
      ref.current?.scrollTo({left: days[slider.position].scrollXFactor * widthPerHour - window.innerWidth / 2, behavior: 'smooth'})
    }
  }, [slider.position, slider.origin, width])

  return (
    <ContentContainer id={'timeline'} ref={ref} onScroll={handleScroll} >
      <TimelineGrid />
      <TimelineLocations />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  position: relative;

  display: flex;

  overflow-x: auto;
  overflow-y: auto;

  min-height: calc(100vh - var(--layout-header-height) - var(--layout-footer-height) + var(--border-width));
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  margin-bottom: -2px;
  
  border-bottom: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
`;
