import { createStore } from "redux";
import { todoReducer } from "../reducers";

export const getStore = (state) => {
    return createStore(todoReducer, state);
};