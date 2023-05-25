import { combineReducers, createStore } from "redux";
import todoReducers from "./reducer/reducersTodo";

const allReducers = combineReducers({
  todoReducers,
});

export const store = createStore(allReducers);
