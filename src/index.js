import React, {useState} from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    //starting with false so the button begins as 'OFF'
    //useState in the hook with the array []

    
    function handleClick() {
        setIsOn((isOn) => !isOn);
    }

    return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
    //if the state is true, then ON will be on the button. Otherwise, it will read OFF
}