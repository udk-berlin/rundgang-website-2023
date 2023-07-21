import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import MetaHeader from '@/components/pages/meta_header'

import LocalizationProvider from "@/components/localization/provider";
import { MetaHeaderTitleProvider } from "@/providers/title";
import ErrorBoundary from "@/error/boundry";

export default function Page ({ children, metaHeaderConfig = {} }) {
  metaHeaderConfig = {
    initialTitle: '',
    titleWithSuffix: true,
    ...metaHeaderConfig
  }

  const client = new ApolloClient({
    uri: "https://2023.api.rundgang.udk-berlin.de/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ErrorBoundary>
      <LocalizationProvider>
        <MetaHeaderTitleProvider {...metaHeaderConfig} >
          <MetaHeader {...metaHeaderConfig} />
          <main>
            <ApolloProvider client={client}>
              {children}
            </ApolloProvider>
          </main>
        </MetaHeaderTitleProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  )
}
