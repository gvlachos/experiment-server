# Apollo GraphQL

Based on the [egghead.io](https://egghead.io) course: [Designing GraphQL Schemas](https://egghead.io/courses/designing-graphql-schemas-99db) (membereship required)

On [Relay Cursor Connections Specification](https://facebook.github.io/relay/graphql/connections.htm)

- [Explaining GraphQL Connections](https://www.apollographql.com/blog/graphql/explaining-graphql-connections)

- [Demystifying GraphQL Connections](https://andrewingram.net/posts/demystifying-graphql-connections/)

## Queries

```graphql

query GetProduct($productId: ID!) {
  product(id: $productId) {
    name,
    description,
    image {
      url,
      description,
      thumbnailUrl
    }
  }
}


query Today($todayLocale: Locales) {
  today(locale: $todayLocale) {
    date,
    day,
    month,
    year
  }
}

query Countries($countriesAfter: ID) {
  countries(first: 10, after: $countriesAfter) {
    pageInfo {
      hasNextPage
      startCursor
    }
    edges {
      node {
        code
        name
      }
    }
  }
}

```

### Variables

```json
{
  "productId": "123",
  "todayLocale": "EN",
  "countriesAfter": "AF"
}
```

## Typescript code generation

Used [GraphQL code generator](https://www.graphql-code-generator.com) instead of [Apollo Codegen](https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types)

## Further reading

[Modularizing your GraphQL schema code](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code)

[Redux to Apollo: Data Access Patterns](https://www.nerdwallet.com/blog/engineering/redux-to-apollo-data-access-patterns)
