import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import MetaHeader from '@/components/pages/meta_header'
import LocalizationProvider from "@/components/localization/provider";
import Layout from "@/components/layout/layout";

export default function ErrorPage () {

  return (
    <LocalizationProvider>
      <MetaHeader title={'error'} />
      <main>
        <Layout disableFilter={true} disableSlider={true}>
          <ErrorMessageContainer>
            <FormattedMessage id={'error.message'} />
          </ErrorMessageContainer>
        </Layout>
      </main>
    </LocalizationProvider>
  )
}

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  min-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  max-height: ${({ theme }) => `calc(100vh - ${theme.header.height} - ${theme.footer.height})`};
  
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`
