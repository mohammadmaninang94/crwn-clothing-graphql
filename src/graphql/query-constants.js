import { gql } from 'apollo-boost';

export const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

export const GET_CART_ITEMS_COUNT = gql`
    {
        cartItemsCount @client
    }
`;

export const GET_CART_TOTAL = gql`
    {
        cartTotal @client
    }
`;

export const GET_CART_ITEMS_AND_TOTAL = gql`
    {
        cartItems @client
        cartTotal @client
    }
`;