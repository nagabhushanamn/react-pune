
import { combineReducers } from 'redux';

import { productsReducer } from './products';
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});

export default rootReducer;
