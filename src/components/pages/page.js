import MetaHeader from '@/components/pages/meta_header'
import LocalizationProvider from "@/components/localization/provider";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ErrorBoundary from "@/error/boundry";

export default function Page ({ children, title, suffix = true }) {
  const client = new ApolloClient({
    uri: "https://2023.api.rundgang.udk-berlin.de/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ErrorBoundary>
      <LocalizationProvider>
        <MetaHeader title={title} suffix={suffix} />
        <main>
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        </main>
      </LocalizationProvider>
    </ErrorBoundary>
  )
}
