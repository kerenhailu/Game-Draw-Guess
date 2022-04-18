import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import Draw from '../Draw/draw-component';
import Guess from '../Guess/guess-component'
import './home.css'
export default function Home() {
  const {userON} = useState({});

  return (
    <div>
<h1>Welcome To Guess & Draw </h1> 
<h1>Lets Play </h1>
 <button><Link to="/guess">Guess</Link></button>
 <button><Link to="/words">Draw</Link></button>
<br/>
<img src='https://monophy.com/media/hC3e34vzwAW9a7a5X0/monophy.gif'
alt='draw'/>
    </div>
  )
}
