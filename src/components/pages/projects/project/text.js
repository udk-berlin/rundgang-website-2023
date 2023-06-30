import React from "react";
import styled from "styled-components";

import getLocalizedData from "@/components/localization/data";

export function ProjectText({ project, data }) {
  let description = getLocalizedData(project.description)
  let texts = []

  if (data && 'languages' in data) {
    let content = getLocalizedData(data.languages).content
    Object.values(content).forEach(item => {
      if(item.type === 'text') {
        texts.push(item.formatted_content);
      }
    })
  }

  return (
    <ProjectTextContainer>
      {description}
      {texts.map((text) => (
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      ))}
    </ProjectTextContainer>
  );
}

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
