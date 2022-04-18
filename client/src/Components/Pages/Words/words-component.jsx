import React from 'react';
import { Link } from 'react-router-dom';


export default function Words() {
  return (
    <div>Words
<h1>Select the level : </h1>
<Link to="/draw"><button >Easy</button></Link><br/>
<Link to="/draw"><button>Middle</button></Link><br/>
<Link to="/draw"><button>Hard</button></Link>
    </div>
  )
}
