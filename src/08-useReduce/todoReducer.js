export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    //Recibe un TODO
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    //Recibe un ID
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    //Recibe un ID
    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
