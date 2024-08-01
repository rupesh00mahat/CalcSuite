import React, { useRef, useState } from 'react'

function BmiCalculator() {
    const weight = useRef(0);
    const height = useRef(0);
    const [bmi, setBMI] = useState(0);
  return (
    <>
    Weight in lbs
        <input type="number" name="weight" id="weight" ref={weight}/>
    Height in Inches
        <input type="number" name="weight" id="weight" ref={height}/>
        <button 
        onClick={()=>{
            setBMI(weight.current.value/(height.current.value*height.current.value)*703)
        }}
        >Calculate BMI</button>
{bmi > 0 && <p><strong>{bmi.toFixed(2)}</strong> is your bmi. </p>}
    </>
  )
}

export default BmiCalculator