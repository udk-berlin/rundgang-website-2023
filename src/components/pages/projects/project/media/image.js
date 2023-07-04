import styled, {useTheme} from "styled-components";
import { useEffect, useRef } from "react";

import getLocalizedData from "@/components/localization/data";

export default function ProjectImageMedia({ project, fullSize = false }) {
  if (!("thumbnail" in project) || !(project.thumbnail)) return <PlaceholderImage />;

  return (
    <ImageMedia
      src={fullSize ? project.thumbnail_full_size : project.thumbnail}
      alt={project.name}
      loading="lazy"
    />
  );
}

export function ProjectAdditionalMedia({ project, data }) {
  const theme = useTheme();
  const videoRef = useRef(null);
  let mediaItems = [];

  useEffect(() => {
    if (videoRef.current && theme.id === 'l') {
      const height = Math.round(parseInt(getComputedStyle(videoRef.current).width) / theme.media.video.ratio)
      videoRef.current.style.height = height + "px";
      videoRef.current.style.minHeight = height + "px";
      videoRef.current.style.maxHeight = height + "px";
    }
  }, [data]);

  if (data && "languages" in data) {
    let media = getLocalizedData(data.languages).content;

    Object.values(media).forEach(mediaItem => {
      switch (mediaItem.template) {
        case "video":
          mediaItems.push(
            <VideoMediaContainer
              ref={videoRef}
              src={getEmbeddedLink(mediaItem.content)}
            />
          );
          break;
        case "image":
          mediaItems.push(
            <ImageMedia
              src={mediaItem.content}
              alt={project.name}
              loading="lazy"
            />
          );
          break;
        case "audio":
          mediaItems.push(
            <AudioMediaContainer controls>
              <source src={mediaItem.content} />
            </AudioMediaContainer>
          );
          break;
        default:
      }
    })
  }

  return (
    <>
      <AdditionalMediaContainer>
        {mediaItems}
      </AdditionalMediaContainer>
    </>

  );
}

const AdditionalMediaContainer = styled.div`
  display: ${({ theme }) => theme.media.display};
  flex-direction: ${({ theme }) => theme.media.flexDirection};
`;

const PlaceholderImage = styled.div`
  height: ${({ theme }) => theme.media.placeholder.height};
  min-height: ${({ theme }) => theme.media.placeholder.height};
  max-height: ${({ theme }) => theme.media.placeholder.height};

  width: auto;

  padding-bottom: 100%;
  
  background: ${({ theme }) => theme.colors.pink};
`;

const ImageMedia = styled.img`
  height: ${({ theme }) => theme.media.image.height};
  min-height: ${({ theme }) => theme.media.image.height};
  max-height: ${({ theme }) => theme.media.image.height};

  width: ${({ theme }) => theme.media.image.width};
  min-width: ${({ theme }) => theme.media.image.width};
  max-width: ${({ theme }) => theme.media.image.width};
`;

const AudioMediaContainer = styled.audio`
  width: ${({ theme }) => theme.media.audio.width};
  min-width: ${({ theme }) => theme.media.audio.width};
  max-width: ${({ theme }) => theme.media.audio.width}; 
`;

const VideoMediaContainer = styled.iframe`
  height: ${({ theme }) => theme.media.video.height};
  min-height: ${({ theme }) => theme.media.video.height};
  max-height: ${({ theme }) => theme.media.video.height};
  
  width: ${({ theme }) => theme.media.video.width};
  min-width: ${({ theme }) => theme.media.video.width};
  max-width: ${({ theme }) => theme.media.video.width};
`;

function getEmbeddedLink(input) {
  let regex =
    /https:\/\/stream\.udk-berlin\.de\/w\/([A-Za-z]+([0-9]+[A-Za-z]+)+)/i;
  return input.replace(regex, "https://stream.udk-berlin.de/videos/embed/$1");
}
