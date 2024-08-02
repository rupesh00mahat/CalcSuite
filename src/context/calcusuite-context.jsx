import { createContext, useReducer } from "react";

export const CalcSuiteContext = createContext();

export const ACTIONTYPE = {
  CALCULATEBMI: "CALCULATEBMI",
  CALCULATEAGE: "CALCULATEAGE",
};

const calcSuiteReducer = (state, action) => {
  if (action.type == ACTIONTYPE.CALCULATEBMI) {
    if (state.weightType == "lbs") {
      let bmi =
        (state.weightInLbs / (state.heightInInch * state.heightInInch)) * 703;
      return { ...state, bmi: bmi };
    }
  } else if (action.type == ACTIONTYPE.CALCULATEAGE) {
    let ageinMS = new Date() - new Date(action.payload); //gives result in millisecond
    let ageInYears = ageinMS / (86400000 * 365.25);
    return { ...state, age: ageInYears, dob: action.payload };
  } else {
    return;
  }
};

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(calcSuiteReducer, {
    dob: undefined,
    heightInInch: undefined,
    weightInLbs: undefined,
    weightType: "lbs",
    heightType: "inches",
    bmi: undefined,
    age: undefined,
  });
  return (
    <CalcSuiteContext.Provider value={{state,dispatch}}>
      {children}
    </CalcSuiteContext.Provider>
  );
}

export default AppContextProvider;
