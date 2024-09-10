import { useReducer } from "react";

const initialState = [];
const actions = {
  ADD_TODO: "ADD_TODO",
  RESET_TODO: "RESET_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
        },
      ];
    case actions.RESET_TODO:
      return initialState;
    case actions.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function init(initialState) {
  const result = [...initialState, { id: 1, name: "coding" }];
  return result;
}


export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h2>Todos: {todos.length}</h2>
      Add New Task:
      <input
        type="text"
        onBlur={(e) =>
          dispatch({ type: actions.ADD_TODO, payload: e.target.value })
        }
      /><button onClick={() => dispatch({ type: actions.RESET_TODO})}>Reset</button>
      <hr />
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}<span><button onClick={() => dispatch({ type: actions.DELETE_TODO, payload: todo.id })}>DELETE</button></span></li>
      ))}
    </div>
  );
};
