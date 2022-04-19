import React, { useContext, useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom';
import Draw from '../Draw/draw-component';
import Guess from '../Guess/guess-component'
import './home.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UsersContext } from '../../../Context/User/User-context';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  borderRadius: "5px",
  bgcolor: "gray",
  color: "white",
  border: "3px solid white  ",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};
export default function Home() {
let [user,setUser] = useState({}) ;
const [open, setOpen] = useState(false);
  const [lengthWord,setLengthWord]=useState(4);
    let { rightWord, setRightWord } = useContext(UsersContext);
// useEffect(()=>{
//   let person = prompt("Please enter your name");
//     setUser(person);
//     console.log(user);
// },[]);
// const a=()=>{
//   <div className="inputWordIn" style={{color:"red"}}>
// <input type={String} title="what you draw" maxLength="4"/>
// <button onClick={() => setOpen(!open)}>click</button>
//   </div>
// }
// const updateRightWord = (event) => {
//   setRightWord(event.target.value) ;
//   // rightWord[event.target.name]=event.target.value;
//   console.log(rightWord);
// };
// function ChangeInput(event){
//   addProduct
// }
  return (
    <div>
      {/* <h1>{user}</h1> */}
<h1>Guess & Draw </h1> 
<h1>Lets Play </h1>
 <button className='btnStart'><Link to="/guess">Guess</Link></button>
 <button onClick={() => setOpen(!open)} className='btnStart'><>Draw</></button>
<br/>
<img src='https://monophy.com/media/hC3e34vzwAW9a7a5X0/monophy.gif'
alt='draw'/>
<Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p
              onClick={() => setOpen(!open)}
              style={{
                cursor: "pointer",
                position: "relative",
                left: "50%",
                bottom: "25px",
              }}
            >
              &#9747;
            </p>
            <p>Choose the level</p>
            {/* <Link to="/easy"> */}
              <button onClick={() => setLengthWord(4)}>Easy(4)</button><br/>
            {/* </Link> */}
            {/* <Link to="/middle"> */}
              <button onClick={() => setLengthWord(5)}>Middle(5)</button><br/>
            {/* </Link> */}
            {/* <Link to="/hard"> */}
              <button onClick={() => setLengthWord(6)}>Hard(6)</button>
            {/* </Link> */}
            <div className="inputWordIn">
            <input type="String" placeholder="what you draw" maxLength={lengthWord} name='name' onChange={(e)=>setRightWord(e.target.value)}/>
            <Link to="/draw">
            <button onClick={() => {console.log(rightWord);  setOpen(!open)}}>click</button>
            
            </Link>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
