import MetaHeader from '@/components/pages/meta_header'
import LocalizationProvider from "@/components/localization/provider";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function Page ({ children }) {
  const client = new ApolloClient({
    uri: "https://2023.api.rundgang.udk-berlin.de/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <MetaHeader />
      <main>
        <ApolloProvider client={client}>
          <LocalizationProvider>
            {children}
          </LocalizationProvider>
        </ApolloProvider>
      </main>
    </>
  )
}
