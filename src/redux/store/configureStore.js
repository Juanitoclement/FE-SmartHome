import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/reducers";
import { newTodo, oldTodo } from "../actions/actions";
let store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(newTodo());
store.dispatch(oldTodo());
export default { store };
