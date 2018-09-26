import axios from "axios";
export const NEW_TODO = "NEW_TODO";

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

function newTodo(params) {
  const request = axios.get(apiUrl).then(res => {
    console.log(res.data.title);
  });
  console.log(request);
  return {
    type: NEW_TODO,
    payload: request,
    ...params
  };
}

export { newTodo };
