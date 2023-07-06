import React from "react";
import styled from "styled-components";

import getLocalizedData from "@/components/localization/data";

export function ProjectText({ project, media }) {
  let description = ''
  let texts = [];

  if (project && project.description) {
    const descriptions ={}
    project.description.forEach(description => descriptions[description.language] = description)
    description = getLocalizedData(descriptions).content;
  }

  if (media && "languages" in media) {
    let mediaItems = getLocalizedData(media.languages).content;
    Object.values(mediaItems).forEach(mediaItem => {
      switch (mediaItem.template) {
        case "text":
          texts.push(
            <ProjectTextText dangerouslySetInnerHTML={{ __html: mediaItem.formatted_content }}/>
          );
          break;
        case "heading":
          texts.push(
            <ProjectTextHeading>{mediaItem.content.substring(4)}</ProjectTextHeading>
          );
          break;
        case "ul":
          texts.push(
            <ProjectTextList
              dangerouslySetInnerHTML={{ __html: mediaItem.formatted_content }}
            />
          );
          break;
      }
    });
  }

  return (
    <ProjectTextContainer>
      {description}
      {texts.map((text) => text)}
    </ProjectTextContainer>
  );
}

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 0.75rem;
`;

const ProjectTextText = styled.div``;


const ProjectTextHeading = styled.div`
  font-size: ${({ theme }) => theme.text.heading};
  font-weight: 500;
`;

const ProjectTextList = styled.div`
  ul {
    list-style-image: url("/assets/svg/layout/arrow_right.svg");
    padding: 0 1rem;
  }
`;
