import React, { useState } from 'react'
import './guess.css';
export default function Guess() {
  const [inputText,setInputText]=useState("");
let {rightWord, setrightWord}=useState({});

const upDateInput=()=>{

}
  return (
    <div>
      <input className='inputGuess' type={String} onChange={(event)=>setInputText(event.target.value)} placeholder="your guess .."/>
     <button onClick={upDateInput}>click</button>
      <h1>{inputText}</h1>
      {
        inputText==rightWord? "good":"bad"
      }

      {/* <button>Right</button>
      <button>wrong</button> */}
    </div>
  )
}
