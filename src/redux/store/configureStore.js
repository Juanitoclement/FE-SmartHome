import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/reducers";
import { newTodo } from "../actions/actions";
let store = createStore(reducers, applyMiddleware(thunk));
let store2 = createStore(reducers, applyMiddleware(thunk));

store.dispatch(newTodo());
store2.dispatch(newTodo());
export default { store, store2 };
