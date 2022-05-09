import { combineReducers } from "redux";
import { itemsReducer, selectedItemsReducer } from "./itemsReducer";

const reducers = combineReducers({
  allItems: itemsReducer,
  item: selectedItemsReducer
});

export default reducers;