import React, { useState } from 'react'
import './guess.css';
export default function Guess() {
  const [inputText,setInputText]=useState("");
let {rightWord, setrightWord}=useState({});
let {guessWord, setGuessWord}=useState({});

  function updateGuessWord (e)  {
    guessWord[e.target.name] = e.target.value;
 
    
}
  return (
    <div>
      <input className='inputGuess' type={String} name='guessName' onChange={updateGuessWord} placeholder="your guess .."/>
     <button onClick={()=>{}}>click</button><br/>
        {
      
             {rightWord}==={guessWord}? "good":"bad"
        
        }
       
        
      <h1> rightWord : {rightWord}</h1>
      

      {/* <button>Right</button>
      <button>wrong</button> */}
    </div>
  )
}
