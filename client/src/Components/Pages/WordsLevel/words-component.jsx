import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Home from '../Home/Home-component';

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

export default function Words() {
  const [open, setOpen] = useState(true);
  // const [lengthWord,setLengthWord]=useState([5,6,7]);
const a=()=>{
  <div className="inputWordIn">
<input type={String} title="what you draw" />
<button>click</button>
  </div>
}
  return (
    <div>
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
            <Link to="/easy">
              <button onClick={() => setOpen(!open)}>Easy(4)</button>
            </Link>
            <Link to="/middle">
              <button onClick={() => setOpen(!open)}>Middle(5)</button>
            </Link>
            <Link to="/hard">
              <button onClick={() => setOpen(!open)}>Hard(6)</button>
            </Link>
            <div className="inputWordIn"></div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
