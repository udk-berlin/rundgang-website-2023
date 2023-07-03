import styled from "styled-components";

export default function LandingBackground () {
  return (
    <BackgroundVideo
      autoPlay
      muted
      loop
      playsInline
      poster="/assets/media/images/background_video1_fallback.jpg"
    >
      <source
        src={'/assets/media/videos/background_video1.webm'}
        type="video/webm"
      />
    </BackgroundVideo>
  )
}

const BackgroundVideo = styled.video`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;
`