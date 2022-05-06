import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";

const reducers = combineReducers({
  allItems : itemsReducer,
});

export default reducers;