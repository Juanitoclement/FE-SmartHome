import { NEW_TODO } from "../actions/actions";
import { combineReducers } from "redux";

function newTodo(state = [], action) {
  switch (action.type) {
    case NEW_TODO:
      return {
        text: action.payload,
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
