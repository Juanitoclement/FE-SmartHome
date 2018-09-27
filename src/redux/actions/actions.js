export const NEW_TODO = "NEW_TODO";

function newTodo(data) {
  console.log(data);
  return {
    type: "NEW_TODO",
    data: data
  };
}
export { newTodo };
