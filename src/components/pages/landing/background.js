import { useWindowSize } from "@/providers/window_size";
import { breakpoints } from "@/themes/theme";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function LandingBackground() {
  const [content, setContent] = useState(null);
  const windowSize = useWindowSize();
  const videoRef = useRef();

  useEffect(() => {
    if (windowSize?.width <= breakpoints.m) {
      setContent(<BackgroundImage src={`/assets/media/bg_video${Math.floor(Math.random() * 5)}_mobile_fallback.webp`}/>)
    } else if (windowSize?.width > breakpoints.m) {
      const path = `/assets/media/bg_video${Math.floor(Math.random() * 2)}`

      setContent(
        <BackgroundVideo autoPlay muted loop playsInline poster={path + "_fallback" + ".webp"} ref={videoRef}>
          <source src={path + ".webm"} type="video/webm" />
        </BackgroundVideo>
      )
    }
  }, [windowSize?.width]);

  useEffect(() => {
    videoRef.current?.load();
  }, [content]);

  return (
    <>
      {content ? content : <></>}
    </>
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


const BackgroundImage = styled.img`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;
`;
