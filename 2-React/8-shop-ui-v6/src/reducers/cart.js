


export function cartReducer(state = [], action) {
    switch (action.type) {
        case 'BUY':
            return [...state, action.item]
        default:
            return state;
    }
}