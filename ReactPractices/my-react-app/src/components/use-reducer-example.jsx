import { useReducer } from "react";

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

const initialState = {
    showTextFlag: false,
    chageTextStyles: false,
}

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
      case CHANGE_TEXT_STYLE:
        return {
          ...state,
          chageTextStyles: true,
        };
      default:
        return state;
    }
}

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            {state.showTextFlag ? <h2 style={{
                color: state.chageTextStyles ? "red" : "blue"
            }}>Use Reducer Hook Example</h2> : null}
            <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
            <button onClick={() => dispatch({ type: SHOW_TEXT})}>Show Text</button>
            <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE})}>Change Text Styles</button>
        </>
    );
}

export default UseReducerExample;
