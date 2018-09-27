import { createStore } from "redux";
import todoApp from "./reducers/reducers";
import { newTodo } from "./actions/actions";
import axios from "axios/index";
let store = createStore(todoApp);

// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => console.log(store.getState()));

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(apiUrl).then(res => {
  store.dispatch(newTodo(res.data.title));
  console.log(res.data.title);
});

export default store;
