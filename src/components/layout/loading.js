import React from "react";
import styled from "styled-components";
import Layout from "@/components/layout/layout";

export default function LoadingLayout () {
  return (
    <Layout disableFilter={true} disableSlider={true}>
      <LoadingContainer>Loading...</LoadingContainer>
    </Layout>
  )
}

export const LoadingContainer =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height} + ${theme.borderWidth})`};
  
  margin-bottom: calc(${({ theme }) => theme.borderWidth} * -1);
  padding: ${({ theme }) => theme.MASONRY_GUTTER};

  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
`