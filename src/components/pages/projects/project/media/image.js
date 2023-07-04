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
    if (videoRef.current) {
      videoRef.current.style.height =
        Math.round(
          parseInt(getComputedStyle(videoRef.current).width) / theme.media.video.ratio
        ) + "px";
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
      {mediaItems}
    </>
  );
}

const PlaceholderImage = styled.div`
  height: ${({ theme }) => theme.media.image.height};
  min-height: ${({ theme }) => theme.media.image.height};
  max-height: ${({ theme }) => theme.media.image.height};
  
  width: auto;
  
  background: ${({ theme }) => theme.color.pink};
`;

const ImageMedia = styled.img`
  height: ${({ theme }) => theme.media.image.height};
  min-height: ${({ theme }) => theme.media.image.height};
  max-height: ${({ theme }) => theme.media.image.height};

  width: ${({ theme }) => theme.media.image.weight};
  min-width: ${({ theme }) => theme.media.image.weight};
  max-width: ${({ theme }) => theme.media.image.weight};
`;

const AudioMediaContainer = styled.audio`
  width: ${({ theme }) => theme.media.audio.width};
  min-width: ${({ theme }) => theme.media.audio.width};
  max-width: ${({ theme }) => theme.media.audio.width}; 
`;

const VideoMediaContainer = styled.iframe`
  width: ${({ theme }) => theme.media.audio.width};
  min-width: ${({ theme }) => theme.media.audio.width};
  max-width: ${({ theme }) => theme.media.audio.width};
`;

function getEmbeddedLink(input) {
  let regex =
    /https:\/\/stream\.udk-berlin\.de\/w\/([A-Za-z]+([0-9]+[A-Za-z]+)+)/i;
  return input.replace(regex, "https://stream.udk-berlin.de/videos/embed/$1");
}
