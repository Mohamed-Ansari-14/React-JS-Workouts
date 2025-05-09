import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      case "reset": {
        return { count: 0 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h1>useReducer Hook Example:</h1>

      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <br />
      <br />
      <input
        value={state.count}
        type="number"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
