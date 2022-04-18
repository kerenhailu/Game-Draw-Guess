const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const path = require("path");

require('./DB/');
const app = express();
const userRouter = require('./Routes/user-route')

const passport = require("passport");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;
app.get('/',(req,res)=>{
    res.send("conect!!");
})

app.use(passport.initialize());
app.use('/users',userRouter);

app.listen(port, () => {
  console.log(`SERVER IN UP On port ${port}`);
});


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });
// }
