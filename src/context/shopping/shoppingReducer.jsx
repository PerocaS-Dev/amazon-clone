export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...(state.basket || []), action.payload]
      };
      
    case "REMOVE_FROM_BASKET":
      const index = (state.basket || []).findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        const newBasket = [...state.basket];
        newBasket.splice(index, 1);
        return { ...state, basket: newBasket };
      }
      return state;

    case "EMPTY_BASKET":
      return {
        ...state,
        basket:[],
      };
      
    case "SET_USER":
      return { ...state, user: action.payload };
      
    default:
      return state || { basket: [], user: null };
  }
};
