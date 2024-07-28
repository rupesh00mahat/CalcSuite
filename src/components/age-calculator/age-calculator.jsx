import React, { useRef, useState } from 'react'

function AgeCalculator() {
    const dobValue = useRef();
    const [age, setAge] = useState(undefined); 

    const calculateDate= (dob) =>{
        let ageinMS = new Date() - new Date(dob); //gives result in millisecond
        let year = ageinMS/(86400000*365.25);
        setAge(year);
    }

  return (
    <div className='age-calculator-wrapper'>
<input type='date' id='dob' name='dob' ref={dobValue}/>
<button onClick={()=>{
calculateDate(dobValue.current.value)}}>Calculate Age</button>
{age != undefined && <p>Your age is {Math.floor(age)}</p>}
    </div>
  )
}

export default AgeCalculator