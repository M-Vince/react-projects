import React, { useState } from "react";
import { GREET_MESSAGES } from "./data.js";

function App() {
  const [val, setVal] = useState("");
  const [greetContent, setGreetContent] = useState("");

  const changeValue = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = () => {
    console.log(val);

    if (val) {
      let time = new Date().toTimeString().slice(0, 8);
      // console.log(time);v
      let timeToday = "";

      if (time >= "06:00:00" && time < "12:00:00") {
        console.log("Morning!");
        timeToday = GREET_MESSAGES.morning;
      } else if (time >= "12:00:00" && time < "18:00:00") {
        console.log("Afternoon!");
        timeToday = GREET_MESSAGES.afternoon;
      } else if (time >= "18:00:00" && time < "00:00:00") {
        console.log("Evening!");
        timeToday = GREET_MESSAGES.evening;
      } else if (time >= "00:00:00" && time < "06:00:00") {
        console.log("Midnight!");
        timeToday = GREET_MESSAGES.midnight;
        console.log(timeToday);
      }

      setGreetContent(
        <div className="greet-content">
          <h2>
            {" "} {timeToday} {val}, Welcome to ReactJS!{" "}
          </h2>
        </div>,
      );
      console.log(greetContent);
    }
  };

  return (
    <div className="container">
      <h1> Greetings Card </h1>
      <input type="text" onChange={(e) => changeValue(e)} />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit Change
      </button>

      {greetContent}
    </div>
  );
}

export default App;
