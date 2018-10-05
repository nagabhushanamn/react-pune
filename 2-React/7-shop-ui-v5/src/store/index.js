

import rootReducer from '../reducers'
import { createStore } from 'redux';


const initialState = {
    products: [],
    reviews: {}
};

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());