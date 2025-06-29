export const shoppingReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,  // ✅ Correct spread of existing state
                basket: [...state.basket, action.payload]
            };
        case 'SET_USER':
            return {
                ...state,  // ✅ Correct spread of existing state
                user: action.payload
            };
        default:
            return state;
    }
}