import React, { useState } from 'react'

export default function Guess() {
  const [inputText,setInputText]=useState("");
let {rightWord, setrightWord}=useState({});

const upDateInput=()=>{
  
}
  return (
    <div>Guess
      <input type={String} onChange={(event)=>setInputText(event.target.value)}/>
      <h1>{inputText}</h1>
      {
        inputText==rightWord? "good":"bad"
      }

      {/* <button>Right</button>
      <button>wrong</button> */}
    </div>
  )
}
