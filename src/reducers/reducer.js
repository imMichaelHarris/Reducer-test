export const initial = [
  {
    name: "First todo",
    completed: false,
    id: 0
  }
];

export const myReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("in reducer", action);
      return [...state, action.payload];
    case "DELETE_ALL":
      return [];
    case "TOGGLE":
      console.log("in toggle", action);
      return [...state.filter(todo => todo.id !== action.payload)];
    default:
      console.log("default");
      return state;
  }
};

// Create inital state
// Create reducer
// Dispatch aways takes an action which is just an object with a type property, payload is optional
