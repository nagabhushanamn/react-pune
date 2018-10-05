import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { loadProducts } from './actions/products'
import store from './store';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


setTimeout(() => {
    let action = loadProducts();
    store.dispatch(action);
}, 1000);

// store.subscribe(() => {
//     let state = store.getState();
//     console.log(state.products)
// });