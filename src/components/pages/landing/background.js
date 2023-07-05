import useWindowSize from "@/hooks/window_size";
import { breakpoints } from "@/themes/theme";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function LandingBackground() {
  const [isMobile, setMobile] = useState(false);
  const [path, setPath] = useState(null);
  const windowSize = useWindowSize();
  const videoRef = useRef();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize?.width]);

  useEffect(() => {
    setPath(
      isMobile
        ? "/assets/media/bg_video" + Math.floor(Math.random() * 5) + "_mobile"
        : "/assets/media/bg_video" + Math.floor(Math.random() * 2)
    );
    videoRef.current.load();
  }, [isMobile]);z

  return (
    <BackgroundVideo
      autoPlay
      muted
      loop
      playsInline
      poster={path + "_fallback" + ".webp"}
      ref={videoRef}
    >
      <source src={path + ".webm"} type="video/webm" />
    </BackgroundVideo>
  );
}

const BackgroundVideo = styled.video`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;
`;
