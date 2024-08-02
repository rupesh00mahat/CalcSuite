import React, { useContext, useRef, useState } from "react";
import { CalcSuiteContext } from "../../context/calcusuite-context";
import {ACTIONTYPE} from "../../context/calcusuite-context";

function AgeCalculator() {
  const dobValue = useRef();

const {state, dispatch} = useContext(CalcSuiteContext);
console.log(state);
  return (
    <div className="age-calculator-wrapper">
      <input type="date" id="dob" name="dob" ref={dobValue} />
      <button
        onClick={() => {
          dispatch({type: ACTIONTYPE.CALCULATEAGE, payload: dobValue.current.value})
        }}
      >
        Calculate Age
      </button>
      {state.age != undefined && <p>Your age is {Math.floor(state.age)}</p>}
    </div>
  );
}

export default AgeCalculator;
