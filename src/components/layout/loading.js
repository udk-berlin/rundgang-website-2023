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
  
  width: calc(100vw - 3 * ${({ theme }) => theme.borderWidth});
  min-width: calc(100vw - 3 * ${({ theme }) => theme.borderWidth});
  max-width: calc(100vw - 3 * ${({ theme }) => theme.borderWidth});

  min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  
  padding: ${({ theme }) => theme.MASONRY_GUTTER};
`