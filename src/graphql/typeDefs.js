import { gql } from 'apollo-boost';

const typeDefs = gql`
    extend type Item {
        quantity: Int
    }

    extend type Mutation {
        ToggleCartHidden: Boolean!,
        AddItemToCart(item: Item!): [Item]!
    }
`;

export default typeDefs;