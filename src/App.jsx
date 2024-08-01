import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/home';
import "./assets/css/global.css";
import AgeCalculator from './components/age-calculator/age-calculator';
import BmiCalculator from './components/bmi-calculator/bmi-calculator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: '/age-calculator',
    element: <AgeCalculator/>
  },
  {
    path: '/bmi-calculator',
    element: <BmiCalculator/>
  }
]);

function App() {
 
  return <RouterProvider router={router}/>
}

export default App
