import { gql } from "apollo-server-core";

export const typeDef = gql`
  type Date {
    date: Int!
    day: String!
    month: String!
    year: Int!
  }

  type  Image {
    url: String!
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }
  
  type Product {
    name: String!
    description: String
    imageUrl: String @deprecated(reason: "Use image.")
    image: Image
  }

  type Country {
    name: String!
    code: String!
  }

  type PageInfo {
    hasNextPage: Boolean!
    # hasPreviousPage: Boolean!
    startCursor: ID!
    # endCursor: ID!
  }

  type CountriesEdge {
    node: Country!
    cursor: ID!
  }

  type CountriesConnection {
    edges: [CountriesEdge]
    pageInfo: PageInfo!
  }
`;
