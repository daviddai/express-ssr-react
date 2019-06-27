import { createStore } from "redux";
import { todoReducer } from "../reducers/index";

export const getStore = (state) => {
    return createStore(todoReducer, state);
};