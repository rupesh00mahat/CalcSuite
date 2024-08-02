import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import "./assets/css/global.css";
import AgeCalculator from "./components/age-calculator/age-calculator";
import BmiCalculator from "./components/bmi-calculator/bmi-calculator";
import AppContextProvider from "./context/calcusuite-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/age-calculator",
    element: <AgeCalculator />,
  },
  {
    path: "/bmi-calculator",
    element: <BmiCalculator />,
  },
]);

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
