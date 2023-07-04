import { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";

import { useSlider, useSliderDispatch } from "@/providers/slider";
import TimelineGrid from "@/components/pages/timeline/grid";
import TimelineLocations from "@/components/pages/timeline/location/locations";

import { breakpoints } from "@/themes/theme";
import { NUMBER_OF_HOURS, DAYS, timelineWidthsWithoutVW } from "@/themes/pages/timeline";

import useWindowSize from '@/hooks/window_size'

export default function TimelineContent() {
  const windowSize = useWindowSize()
  const language = useIntl();
  const slider = useSlider()
  const dispatch = useSliderDispatch()
  const ref = useRef(null);
  const days = language.locale === 'en' ? DAYS.en : DAYS.de

  const handleScroll = () => {
    const timelineWidth = window.innerWidth <= breakpoints.m ?  window.innerWidth * timelineWidthsWithoutVW.m : window.innerWidth * timelineWidthsWithoutVW.l
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
      } else if ((scrollLeft > days[0].scrollXFactor * widthPerHour || ((days[1].scrollXFactor * widthPerHour - window.innerWidth / 2) <= scrollLeft + 1)) && scrollLeft <= days[1].scrollXFactor * widthPerHour && scrollLeft < timelineWidth - window.innerWidth) {
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
    const timelineWidth = window.innerWidth <= breakpoints.m ?  window.innerWidth * timelineWidthsWithoutVW.m : window.innerWidth * timelineWidthsWithoutVW.l
    const widthPerHour = timelineWidth / NUMBER_OF_HOURS

    if (slider.origin !== 'scroll') {
      ref.current?.scrollTo({left: days[slider.position].hoursBefore * widthPerHour - ((window.innerWidth - days[slider.position].hours * widthPerHour) / 2), behavior: 'smooth'})
    }
  }, [slider.position, slider.origin, windowSize?.width])

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

  min-height: calc(100vh - var(--layout-header-height) - var(--layout-footer-height) + ${({theme}) => theme.borderWidth});
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  margin-bottom: -2px;
  
  border-bottom: ${({theme}) => theme.border};
  border-right: ${({theme}) => theme.border};
  border-left: ${({theme}) => theme.border};
`;
