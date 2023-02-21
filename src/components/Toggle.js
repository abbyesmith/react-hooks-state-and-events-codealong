import React, {useState} from "react";


function Toggle() {
  const [isOn, setIsOn] = useState(false);
  //starting with false so the button begins as 'OFF'
  //useState in the hook with the array []

  
  function handleClick() {
      setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style = {{background: color}} onClick = {handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  )
}
export default Toggle;
