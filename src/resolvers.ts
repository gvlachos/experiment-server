import { countries } from "./countries.data";
import { CountriesConnection, CountriesEdge, Country, Date, PageInfo, Product } from "./generated/graphql";

export const resolvers = {
    Query: {
        product: (): Product => ({
            name: "Chair",
            description: "Great!!!",
            imageUrl: null,
            image: {
                url: "https://example.com/abc.png",
                description: "Best Chair",
                thumbnailUrl: "https://example.com/abc-xs-xs.png",
            }
        }),
        today: (parent: any, args: any, context: any, info: any): Date => {
            const result: Date = {
                date: 4,
                day: args.locale === 'GR' ? 'Δευτέρα' : 'Monday',
                month: args.locale === 'GR' ? 'Οκτώβριος' : 'October',
                year: 2021
            }
            return result;
        },
        countries: (parent: any, args: any, context: any, info: any): CountriesConnection => {
            // will loop from the start when end of list is reached
            const code = args.after?.length ? args.after : countries[0].code;
            let index: number = countries.findIndex(country => country.code === args.after);
            if (index < 0)  {
                index = 0;
            }

            const result: Country[] = countries.slice(index, index + args.first);
            const edges: CountriesEdge[] = result.map(node => ({ node, cursor: args.after }))

            const hasNextPage: boolean = index < countries.length - args.first - 1;
            const startCursor: string = hasNextPage ? countries[index + args.first].code : countries[0].code;
            const pageInfo: PageInfo = {hasNextPage, startCursor};

            return { edges, pageInfo };
        }
    }
}
