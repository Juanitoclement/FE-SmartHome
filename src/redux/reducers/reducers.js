import { NEW_TODO } from "../actions/actions";
import { combineReducers } from "redux";

function newTodo(state = [], action) {
  switch (action.type) {
    case NEW_TODO:
      return {
        text: "clement",
        completion: false
      };
    default:
      return state;
  }
}

const appState = combineReducers({
  newTodo
});

export default appState;
