
import { LOAD_PRODUCTS } from '../constants'

export function loadProducts() {
    return function (dispatch) {
        let api = "http://localhost:8080/api/products";
        //Async
        fetch(api)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products }); // async action
            })
    }
}