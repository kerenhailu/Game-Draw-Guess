import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom';
import Draw from '../Draw/draw-component';
import Guess from '../Guess/guess-component'
import './home.css'
export default function Home() {
let [user,setUser] = useState({}) ;
// useEffect(()=>{
//   let person = prompt("Please enter your name");
//     setUser(person);
//     console.log(user);
// },[]);
  
  return (
    <div>
      {/* <h1>{user}</h1> */}
<h1>Guess & Draw </h1> 
<h1>Lets Play </h1>
 <button className='btnStart'><Link to="/guess">Guess</Link></button>
 <button className='btnStart'><Link to="/words">Draw</Link></button>
<br/>
<img src='https://monophy.com/media/hC3e34vzwAW9a7a5X0/monophy.gif'
alt='draw'/>
    </div>
  )
}
