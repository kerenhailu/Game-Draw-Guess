const mongoose = require("mongoose");
const schema = mongoose.Schema;
const User = new schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Points:{ type: Number },
    IsAdmin:{ type: Boolean },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);