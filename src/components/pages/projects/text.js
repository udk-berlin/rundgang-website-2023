import React from "react";
import useSWR from "swr";
import styled from "styled-components";

import { getRenderJsonUrl, fetcher } from "@/utils/api/api";

export function ProjectText({ project }) {
  const { data, error, isLoading } = useSWR(
    getRenderJsonUrl(project.id),
    fetcher
  );
  let texts = [];
  if (data) {
    let element = data.languages.EN.content;
    for (const key in element) {
      switch (element[key].type) {
        case "text":
          texts.push(element[key].formatted_content);
          break;
      }
    }
  }
  return (
    <ProjectTextContainer>
      {project.description.default}
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
