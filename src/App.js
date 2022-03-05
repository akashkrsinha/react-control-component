import React from "react";
import "./style.css";

export default function App() {

  const [val, setVal] = React.useState('Enter Name')
  function handleChange(){
    setVal("Enter Password")
  }
  return (
    <div>
      <input type='text' onChange={handleChange} value={val}/>
    </div>
  );
}
