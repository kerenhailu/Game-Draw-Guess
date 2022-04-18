const dotenv = require("dotenv");
dotenv.config();
///!---------------------------->

///!----------Requires------------------>

const express = require("express");
const cors = require('cors');
const path = require("path");

require('./DB/');
const app = express();
const userRouter = require('./Routes/user-route')



const passport = require("passport");
// require("./Config/passport")(passport);
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;
///!----------Requires------------------>


app.get('/',(req,res)=>{
    res.send("conect!!");
})

///!----------USES-------------->
app.use(passport.initialize());
app.use('/users',userRouter);


///!----------USES-------------->

 

app.listen(port, () => {
  console.log(`SERVER IN UP On port ${port}`);
});


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });
// }
