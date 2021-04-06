import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_ITEM_TO_CART } from '../../graphql/mutation-constants';

import CheckoutItem from './checkout-item.component';

const CollectionItemContainer = (props) => {
    console.log({ props });
    return (
        <Mutation mutation={ADD_ITEM_TO_CART}>
            {
                addItemToCart =>
                    <CheckoutItem
                        cartItem={props.cartItem}
                        addItem={item => addItemToCart({ variables: { item } })} />
            }
        </Mutation>
    )
};

export default CollectionItemContainer;