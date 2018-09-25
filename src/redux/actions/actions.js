export const NEW_TODO = "NEW_TODO";

function newTodo(params) {
  return {
    type: NEW_TODO,
    ...params
  };
}

export { newTodo };
