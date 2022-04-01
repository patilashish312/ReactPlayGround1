import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App2() {

  const [enteredText, setEnteredText] = useState("");
  const [submittedText, setSubmittedText] = useState(null);
  const [convertedText, setConvertedText] = useState(null);
  const [wordTime, setWordTime] = useState("Invalid input");
  const [submitted, setSubmitted] = useState(false);
  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
    //console.log('Printing vale'+i.target.value);
  };

  const submitHandler = (event) => {
    setSubmitted(true);
    const [hr, min] = enteredText.split('.');
    event.preventDefault();
    setSubmittedText(enteredText);

    setEnteredText("");
    console.log(min);
    console.log(hr);
    if (typeof min === 'number' && typeof hr === 'number') {
      if ((hr >= 0 && hr <= 24) || (min >= 0 && min <= 60)) {
        convert(hr, min);
      }
    }
  };

  return (
    <div className="App">
      <h1>Get user input</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="type something"
          type="text"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button type="submit"
        >
          Submit
        </button>
      </form>

      {(() => {
        if (submitted && submittedText) {
          return (<p>You just typed: {submittedText} </p>);
        }
      })()}
      {(() => {
        if (submitted) {
          if (wordTime != "Invalid input") {
            return (<p>Word format of time is:  {wordTime}</p>);
          }
          else {
            return wordTime;
          }
        }
      })()}
    </div>
  );

  function convert(h, m) {
    let nums = ["zero", "one", "two", "three", "four",
      "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen",
      "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen", "twenty", "twenty one",
      "twenty two", "twenty three", "twenty four",
      "twenty five", "twenty six", "twenty seven",
      "twenty eight", "twenty nine",
    ];
    if (m) {
      if (m === 0)
        setWordTime(nums[h] + " o' clock ");

      else if (m === 1)
        setWordTime("one minute past " + nums[h]);

      else if (m === 59)
        setWordTime("one minute to " +
          nums[(h % 12) + 1]);

      else if (m === 15)
        setWordTime("quarter past " + nums[h]);

      else if (m === 30)
        setWordTime("half past " + nums[h]);

      else if (m === 45)
        setWordTime("quarter to " + nums[(h % 12) + 1]);

      else if (m <= 30)
        setWordTime(nums[m] + " minutes past " + nums[h]);

      else if (m > 30)
        setWordTime(nums[60 - m] + " minutes to " + nums[(h % 12) + 1]);
    }
    else setWordTime(nums[h]);

  }
}
export default App2;
