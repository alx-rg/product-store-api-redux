import { ActionTypes } from "../constants/action-types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
        return { ...state, products: payload };
      default:
        return state;
  }
};