import { NEW_TODO } from "../actions/actions";
import { combineReducers } from "redux";

function newTodo(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case NEW_TODO:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

const appState = combineReducers({
  newTodo
});

export default appState;
