

import { LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants'

export function loadReviews(productId) {
    //..
    let reviews = [
        { stars: 3, author: 'who@email.com', body: 'sample review' }
    ];
    return { type: LOAD_REVIEWS, productId, reviews }
}

export function submitNewReview(productId, newReview) {
    //..

    return { type: SUBMIT_NEW_REVIEW, productId, newReview }
}