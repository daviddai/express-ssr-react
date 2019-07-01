export const todoReducer = (state = {todoList: []}, action) => {
    switch(action.type) {
        case "ADD_TODO_ITEM": return {todoList: [...state.todoList, action.item]};
        default: return state;
    }
};