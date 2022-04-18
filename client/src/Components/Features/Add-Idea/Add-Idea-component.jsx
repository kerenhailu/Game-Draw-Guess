import React, { useContext,useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
import { CreateIdea } from "../../../Services/Ideas-Service";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import './AddIdea.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '70%',
  transform: 'translate(-125%, -50%)',
  width: 410,
  borderRadius: "5px" ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddIdea() {
  const navigate = useNavigate();
  const { user } = useContext(UsersContext);
  const [open, setOpen] = useState(false);

  const [idea, setIdea] = useState({ 
    Description:{},
    UserId:user._id
  });

  const AddIdeaToIdeas = (e) => {
    e.preventDefault();
    setIdea({ ...idea });
    console.log(idea);
    CreateIdea(idea, user._id);
    setOpen(!open);
  };
  const ChangingDescriptionValue = (e) => {
    idea.Description[e.target.name] = e.target.value;
  };
  const ChangingTheValue = (e) => {
    idea[e.target.name] = e.target.value;
  };
  return (
<div className="container">  
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p> Hey {user.FirstName} ,  You Posted Successfully !</p>
           <button onClick={() => navigate('/Ideas')}>Ideas</button>
          </Typography>
        </Box>
      </Modal>
  <form id="contact" action="" method="post">
    <h3>Add Idea</h3>
    <fieldset>
      <input  name="IdeaTitle" placeholder="Your IdeaTitle" type="text" tabIndex="1" required autoFocus onChange={ChangingTheValue} />
    </fieldset>
    <fieldset>
      <input name="Category" placeholder="Your Category" type="text" tabIndex="1" required autoFocus  onChange={ChangingTheValue} />
    </fieldset>
    <fieldset>
      <input name="Problem"  placeholder="Your Problem" type="text" tabIndex="2" required  onChange={ChangingDescriptionValue}/>
    </fieldset>
    <fieldset>
      <input name="Solution" placeholder="Your Solution" type="text" tabIndex="3" required  onChange={ChangingDescriptionValue}/>
    </fieldset>

    <fieldset>
      <button className="addIdeaBtn" onClick={AddIdeaToIdeas}  type="submit" id="contact-submit" data-submit="...Sending">Send</button>
    </fieldset>
  </form>
</div>
  );
}
