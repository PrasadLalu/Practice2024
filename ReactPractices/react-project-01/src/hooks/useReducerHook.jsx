import { useReducer } from "react";

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const RESET = "RESET";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

const initialState = {
  showTextFlag: false,
  changeTextStyleFlag: false,
};

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showTextFlag: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showTextFlag: true,
      };
    case RESET:
      return {
        ...state,
        showTextFlag: true,
        changeTextStyleFlag: false,
      };
    case CHANGE_TEXT_STYLE:
      return {
        ...state,
        changeTextStyleFlag: true,
      };
    default:
      return state;
  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { showTextFlag, changeTextStyleFlag } = state;
  return (
    <div>
      {showTextFlag ? (
        <h3
          style={{
            color: changeTextStyleFlag ? "red" : "blue",
            border: changeTextStyleFlag
              ? "2px solid green"
              : "2px solid tomato",
          }}
        >
          {" "}
          React useReducer Hook
        </h3>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Change Text Style
      </button>
    </div>
  );
};
