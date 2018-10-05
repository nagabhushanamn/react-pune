

import { LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants'

export function loadReviews(productId) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS, productId, reviews })
            })
    }
}

export function submitNewReview(productId, newReview) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(api, {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(serverReview => {
                dispatch({ type: SUBMIT_NEW_REVIEW, productId, newReview: serverReview })
            })
    }
}