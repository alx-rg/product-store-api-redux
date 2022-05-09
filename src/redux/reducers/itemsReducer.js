import { ActionTypes } from "../constants/action-types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
        return { ...state, items: payload };
      default:
        return state;
  }
};

export const selectedItemsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_ITEM:
      return { ...state, ...payload };
    default:
      return state;
  }
}