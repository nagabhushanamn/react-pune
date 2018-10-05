

import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


const initialState = {
    products: [],
    reviews: {}
};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));