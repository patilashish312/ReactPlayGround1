import React from "react"
import "./App.css"
import {useState} from 'react'

function App3() {
    const [value,setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
      };
      return (
        <>
          <div>Input value: {value}</div>
          <input value={value} onChange={onChange} />
        </>
      );
}

export default App3;