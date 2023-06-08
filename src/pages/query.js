import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Rooms from '@/components/pages/query/items'

const client = new ApolloClient({
    uri: 'https://2023.api.rundgang.udk-berlin.de/graphql',
    cache: new InMemoryCache(),
});


import MetaHeader from "@/components/meta_header";

export default function Query() {
    return (
        <>
            <MetaHeader />
            <main>
                <ApolloProvider client={client}>
                    <Rooms />
                </ApolloProvider>
            </main>
        </>
    );
}
