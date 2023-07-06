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

  height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  max-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
`