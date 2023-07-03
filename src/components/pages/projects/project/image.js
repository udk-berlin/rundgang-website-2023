import styled from "styled-components";
import { useEffect, useRef } from "react";

import styles from "@/styles/pages/projects/Image.module.css";
import getLocalizedData from "@/components/localization/data";

export default function ProjectImage({ project, fullSize = false }) {
  let image;

  if ("thumbnail" in project && project.thumbnail) {
    image = (
      <img
        className={styles.image}
        src={fullSize ? project.thumbnail_full_size : project.thumbnail}
        alt={project.name}
        loading="lazy"
      />
    );
  } else {
    image = <ProjectPlaceholderImage />;
  }

  return image;
}

export function ProjectAdditionalMedia({ project, data }) {
  const iFrameRef = useRef(null);
  let media = [];

  useEffect(() => {
    if (iFrameRef.current) {
      iFrameRef.current.style.height =
        Math.round(
          parseInt(getComputedStyle(iFrameRef.current).width) / 1.777777777
        ) + "px";
    }
  }, [data]);

  if (data && "languages" in data) {
    let additionalContent = getLocalizedData(data.languages).content;

    for (const key in additionalContent) {
      let item = additionalContent[key];

      switch (item.type) {
        case "video":
          media.push(
            <iframe
              className={styles.video}
              ref={iFrameRef}
              src={getEmbeddedLink(item.content)}
              frameBorder="0"
            />
          );
          break;
        case "image":
          media.push(
            <img
              className={styles.image}
              src={item.content}
              alt={project.name}
            />
          );
          break;
        default:
      }
    }
  }

  return (
    <ProjectAdditionalMediaContainer>
      {media.map((content) => content)}
    </ProjectAdditionalMediaContainer>
  );
}

const ProjectPlaceholderImage = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: var(--color-pink);
`;

const ProjectAdditionalMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 0.5rem;
`;

function getEmbeddedLink(input) {
  let regex =
    /https:\/\/stream\.udk-berlin\.de\/w\/([A-Za-z]+([0-9]+[A-Za-z]+)+)/i;
  return input.replace(regex, "https://stream.udk-berlin.de/videos/embed/$1");
}
