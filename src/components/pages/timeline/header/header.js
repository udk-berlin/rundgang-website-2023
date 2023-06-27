import {useEffect, useRef} from "react";
import styled from "styled-components";

import TimelineDays from "@/components/pages/timeline/header/days";
import TimelineHours from "@/components/pages/timeline/header/hours";

export default function TimelineHeader() {
  const ref = useRef(null);

  useEffect(() => {
    window.document.getElementById('timeline').addEventListener('scroll', (e) => {
      ref.current?.scrollTo({left: window.document.getElementById('timeline').scrollLeft})
  })}, [])

  useEffect(() => {

    let keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
      e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

// modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    ref.current.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    ref.current.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    ref.current.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    ref.current.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }, [])

  return (
    <HeaderContainer ref={ref} id={'timeline-header'}>
      <TimelineDays/>
      <TimelineHours/>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 6;
  left: 0;
  top: var(--layout-header-height);

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
