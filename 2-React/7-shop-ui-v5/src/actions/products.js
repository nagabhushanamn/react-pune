
import { LOAD_PRODUCTS } from '../constants'

export function loadProducts() {
    //
    let products = [
        {
            id: 111,
            name: 'Laptop',
            price: 198000,
            description: 'New Mac pro',
            canbuy: true,
            image: 'images/Laptop.png'
        },
        {
            id: 222,
            name: 'Mobile',
            price: 18000,
            description: 'New pro',
            canbuy: true,
            image: 'images/Mobile.png'
        }
    ]
    return { type: LOAD_PRODUCTS, products }; // action
}