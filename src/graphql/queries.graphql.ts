import { gql } from "apollo-server-core";

export const typeDef = gql`
  type Query {
    product(id: ID!): Product
    today(locale: Locales = EN): Date
    countries(first: Int = 5, after: ID = "AF"): CountriesConnection!
  }
`;
