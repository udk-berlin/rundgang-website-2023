import React from "react";
import styled from "styled-components";

import getLocalizedData from "@/components/localization/data";

export function ProjectText({ project, data }) {
  let description = getLocalizedData(project.description);
  let texts = [];

  if (data && "languages" in data) {
    let content = getLocalizedData(data.languages).content;
    Object.values(content).forEach((item) => {
      switch (item.template) {
        case "text":
          texts.push(
            <ProjectTextText>{item.formatted_content}</ProjectTextText>
          );
          break;
        case "heading":
          texts.push(
            <ProjectTextHeading>{item.content.substring(4)}</ProjectTextHeading>
          );
          break;
        case "ul":
          texts.push(
            <ProjectTextList
              dangerouslySetInnerHTML={{ __html: item.formatted_content }}
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
  font-size: ${({ theme }) => theme.additionalText.heading};
  font-weight: 500;
`;

const ProjectTextList = styled.div`
  ul {
    list-style-image: url("/assets/svg/layout/arrow_right.svg");
    padding: 0 1rem;
  }
`;
