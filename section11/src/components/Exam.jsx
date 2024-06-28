import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlusButton = () => {
    dispatch({
      type: "INCREASE",
      data: 1
    })
  }

  const onClickMinusButton = () => {
    dispatch({
      type: "DECREASE",
      data: 1
    })
  }

  return (
      <div>
        <h1>{state}</h1>
        <button onClick={onClickPlusButton}>+</button>
        <button onClick={onClickMinusButton}>-</button>
      </div>
  );
}

export default Exam;