import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4xjvc0p0mge01t28kmib3ep/master',
  cache: new InMemoryCache()
})