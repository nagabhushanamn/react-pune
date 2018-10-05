

import { LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants'

/*

{
    111:[],
    222:[]
}

*/

export function reviewsReducer(state = {}, action) {
    console.log('reviews reducer');
    switch (action.type) {
        case LOAD_REVIEWS: {
            let reviews = state[action.productId] || [];
            reviews = reviews.concat(action.reviews);
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        case SUBMIT_NEW_REVIEW: {
            let reviews = state[action.productId] || [];
            reviews = reviews.concat(action.newReview);
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        default: return state;
    }
}