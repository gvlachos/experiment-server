import { gql } from "apollo-server-core";

export const typeDefs = gql`
    enum Locales {
      EN
      GR
    }

    type Date {
      date: Int,
      day: String,
      month: String,
      year: Int
    }

    type  Image {
      url: String,
      description: String,
      thumbnailUrl(width: Int, height: Int): String
    }
    
    type Product {
      name: String
      description: String,
      imageUrl: String @deprecated(reason: "Use \`image\`.")
      image: Image
    }

    type Query {
      product(id: ID!): Product
      today(locale: Locales = EN): Date
    }
`;
