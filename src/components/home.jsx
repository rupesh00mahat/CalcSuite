import React from 'react'
import "../assets/css/home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
        <h1>CalcSuite</h1>
        <div className="tasks-wrapper">
            <div className="task-item mb-20">
                <Link to="/age-calculator">Age Calculator</Link>
            </div>
            <div className="task-item mb-20">
               <button>Currency Converter</button>
            </div>
            <div className="task-item mb-20">
               <button>BMI Calculator</button>
            </div>
            <div className="task-item mb-20">
               <button>Length Calculator</button>
            </div>
            <div className="task-item mb-20">
              <button> Weight Calculator</button>
            </div>
            <div className="task-item mb-20">
               <button>Time converter </button>
            </div>
        </div>
    </div>
  )
}

export default Home