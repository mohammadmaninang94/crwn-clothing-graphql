import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { TOGGLE_CART_HIDDEN } from '../../graphql/mutation-constants';
import { GET_CART_ITEMS_COUNT } from '../../graphql/query-constants';

import CartIcon from './cart-icon.component';

const CartIconContainer = () => (
    <Query query={GET_CART_ITEMS_COUNT}>
        {
            ({ data: { cartItemsCount } }) => (
                <Mutation mutation={TOGGLE_CART_HIDDEN}>
                    {
                        toggleCartHidden =>
                            <CartIcon
                                toggleCartHidden={toggleCartHidden}
                                itemCount={cartItemsCount}
                            />
                    }
                </Mutation>)
        }
    </Query>
);

export default CartIconContainer;