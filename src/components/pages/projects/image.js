import styled from "styled-components";
import useSWR from "swr";
import { getRenderJsonUrl, fetcher } from "@/utils/api/api";
import { useRef, useState } from "react";

const IMAGE_PLACEHOLDER_SIZES = [
  { height: 400 },
  { height: 500 },
  { height: 600 },
  { height: 700 },
  { height: 800 },
  { height: 900 },
];

const getRandomImagePlaceholderSize = () => {
  return IMAGE_PLACEHOLDER_SIZES[
    Math.floor(Math.random() * IMAGE_PLACEHOLDER_SIZES.length)
  ];
};

export default function ProjectImage({ project, full_size = 0 }) {
  let image = <></>;

  if ("thumbnail" in project && project.thumbnail) {
    image = (
      <img
        src={full_size ? project.thumbnail_full_size : project.thumbnail}
        alt={project.name}
        loading="lazy"
        style={{ width: "100%", display: "block" }}
      />
    );
  } else {
    const size = getRandomImagePlaceholderSize();
    image = (
      <div
        style={{
          width: "100%",
          height: size.height,
          minHeight: size.height,
          background: "var(--color-transparent-pink)",
        }}
      />
    );
  }

  return image;
}

export function ProjectAdditionalMedia({ project }) {
  const { data, error, isLoading } = useSWR(
    getRenderJsonUrl(project.id),
    fetcher
  );

  const ref = useRef(null);
  const [messageData, setMessageData] = useState(undefined);

  const onResized = (data) => setMessageData(data);

  const onMessage = (data) => {
    setMessageData(data);
    ref.current.sendMessage("Hello back from parent page");
  };

  let media = [];

  if (data) {
    let additionalContent = data.languages.EN.content;
    // console.log(data.languages.EN.content);
    for (const key in additionalContent) {
      let item = additionalContent[key];
      console.log(item);

      switch (item.type) {
        case "video":
          media.push(
            <iframe
              src={getEmbededLink(item.content)}
              width="100%"
              height="700px"
              frameBorder="0"
            />
          );
          break;
        case "image":
          media.push(
            <img
              src={item.content}
              alt={project.name}
              style={{ width: "100%", display: "block" }}
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

const ProjectAdditionalMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 0.5rem;
`;

function getEmbededLink(input) {
  let regex =
    /https:\/\/stream\.udk-berlin\.de\/w\/([A-Za-z]+([0-9]+[A-Za-z]+)+)/i;
  return input.replace(regex, "http://stream.udk-berlin.de/videos/embed/$1");
}
