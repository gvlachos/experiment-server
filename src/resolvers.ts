export const resolvers = {
    Query: {
        product: () => ({
            name: "Chair",
            description: "Great!!!",
            imageUrl: null,
            image: {
                url: "https://example.com/abc.png",
                description: "Best Chair",
                thumbnailUrl: "https://example.com/abc-xs-xs.png",
            }
        }),
        today: (parent: any, args: any, context: any, info: any) => {
            const result = {
                date: 4,
                day: args.locale === 'GR' ? 'Δευτέρα' : 'Monday',
                month: args.locale === 'GR' ? 'Οκτώβριος' : 'October',
                year: 2021
            }
            return result;
        }
    }
}
