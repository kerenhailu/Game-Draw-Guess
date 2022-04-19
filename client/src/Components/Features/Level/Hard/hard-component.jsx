import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  borderRadius: "5px",
  bgcolor: "gray",
  color: "white",
  border: '3px solid white  ',
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

    export default function Hard() {
    const [open, setOpen] = useState(true);
  const { wordDraw,setWordDraw } = useState("");

  return (
    <div>Hard
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p onClick={() => setOpen(!open)} style={{ cursor: "pointer", position: "relative", left: "50%", bottom: "25px" }}>&#9747;</p>
            <p>wtite the word you draw!</p> 
            <input type={String} maxLength="6" onChange={(e)=>setWordDraw(e.target.value)}/>
            <br/>
      <Link to="/draw">
        <button onClick={() => setOpen(!open)}>Draw</button>
        </Link>
        
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
