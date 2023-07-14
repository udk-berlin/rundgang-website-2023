import React, {useEffect, useRef} from "react";
import styled, {useTheme} from "styled-components";

import ProjectInfoGrid from "@/components/pages/projects/project/info_grid";
import getLocalizedData from "@/components/localization/data";

export default function ProjectMedia({ project, media, contexts, fullSize = false, infoGridPos }) {
  return (
    <MediaContainer>
      {infoGridPos ? <ProjectInfoGrid project={project} contexts={contexts} /> : <></>}
      <ThumbnailMedia project={project} fullSize={fullSize} />
      <ProjectAdditionalMedia project={project} media={media} />
    </MediaContainer>
  )
}

function ThumbnailMedia({ project, index = 0, fullSize = false }) {
  if (!(project) || !(project.thumbnail)) return <PlaceholderImageContainer />;

  return (
    <ThumbnailMediaContainer
      src={fullSize ? project.thumbnail_full_size : project.thumbnail.replace('crop', 'scale')}
      alt={project.name}
      loading={index < 15 ? 'eager' : 'lazy'}
    />
  );
}

export function ProjectAdditionalMedia({ project, media }) {
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
  }, [media]);

  if (media && media["languages"]) {
    let mediaContent = getLocalizedData(media.languages).content;

    Object.values(mediaContent).forEach(mediaItem => {
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
            <ImageMediaContainer
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

const MediaContainer = styled.div`
  display: ${({ theme }) => theme.media.display};
  flex-direction: ${({ theme }) => theme.media.flexDirection};
  position: relative;
  
  height: ${({ theme }) => theme.media.height};
  min-height: ${({ theme }) => theme.media.height};
  max-height: ${({ theme }) => theme.media.height};

  width: ${({ theme }) => theme.media.width};
  min-width: ${({ theme }) => theme.media.width};
  max-width: ${({ theme }) => theme.media.width};

  overflow-x: ${({ theme }) => theme.media.overflowX};
  overflow-y: ${({ theme }) => theme.media.overflowY};
`;

const AdditionalMediaContainer = styled.div`
  display: ${({ theme }) => theme.media.display};
  flex-direction: ${({ theme }) => theme.media.flexDirection};
`;

const PlaceholderImageContainer = styled.div`
  height: ${({ theme }) => theme.media.placeholder.height};
  min-height: ${({ theme }) => theme.media.placeholder.height};
  max-height: ${({ theme }) => theme.media.placeholder.height};

  width: ${({ theme }) => theme.media.placeholder.width};
  min-width: ${({ theme }) => theme.media.placeholder.width};
  max-width: ${({ theme }) => theme.media.placeholder.width};

  padding-bottom: 100%;
  
  background: ${({ theme }) => theme.colors.pink};
`;

const ThumbnailMediaContainer = styled.img`
  height: ${({ theme }) => theme.media.thumbnail.height};
  min-height: ${({ theme }) => theme.media.thumbnail.height};
  max-height: ${({ theme }) => theme.media.thumbnail.height};

  width: ${({ theme }) => theme.media.thumbnail.width};
  min-width: ${({ theme }) => theme.media.thumbnail.width};
  max-width: ${({ theme }) => theme.media.thumbnail.width};
`;

const ImageMediaContainer = styled.img`
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
