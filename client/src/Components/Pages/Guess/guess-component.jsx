import React, { useState } from 'react'

export default function Guess() {
  const [inputText,setInputText]=useState("")
  return (
    <div>Guess
      <input type={String} onChange={(event)=>setInputText(event.target.value)}/>
      <h1>{inputText}</h1>

      {/* <button>Right</button>
      <button>wrong</button> */}
    </div>
  )
}
