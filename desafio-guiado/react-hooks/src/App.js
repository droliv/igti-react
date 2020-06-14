import React, {useState, useEffect} from 'react';
import {getNewTimestamp} from './helpers/timestampHelper'

export default function App() {
  const [clickArray, setClickArray] = useState([]);
  useEffect(() => {
    document.title = clickArray.length;
  })
  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());
    setClickArray(newClickArray)
  }
  return (
    <div className="App">
      <h1>React com Hooks</h1>
      <button onClick={handleClick}>Click me</button>
      <ul>
        {clickArray.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}

