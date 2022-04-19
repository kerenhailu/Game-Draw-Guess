import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../../../Context/User/User-context';
import Right from '../../Features/Answers/Right/right-component';
import Wrong from '../../Features/Answers/Wrong/wrong-component';
import './guess.css';
export default function Guess() {
  // const [inputText,setInputText]=useState("");
let {guessWord, setGuessWord}=useContext(UsersContext);
let { rightWord, setRightWord } = useContext(UsersContext);
useEffect(()=>{
    console.log(rightWord);
},[]);
  function updateGuessWord ()  {
    // setGuessWord(e.target.value);
    // console.log(rightWord);
    // console.log(guessWord);
    rightWord===guessWord ? <Right/>:<Wrong/>;
    
}
  return (
    <div>
      <input type="String" className='inputGuess'  onChange={(e)=>setGuessWord(e.target.value)} placeholder="your guess .."/>
     <button onClick={()=>updateGuessWord}>click</button><br/>
     {/* {
       {rightWord}==={guessWord} ? <>You Right !!!</>:<>You wrong !!!</>

     } */}

           
        {/* {
      
             {rightWord}==={guessWord}? "good":"bad"
        
        } */}
       
        
      {/* <h1> rightWord : {rightWord}</h1> */}
      

      {/* <button>Right</button>
      <button>wrong</button> */}
    </div>
  )
}
