import { ActionTypes } from "../constants/action-types";

const initialState = {
  items: [
    {
      id: 1,
      title: "Split Querty Keyboard",
      category: "Computer Accessories"
    },
  ],
};

export const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
        return state;
      default:
        return state;
  }
};