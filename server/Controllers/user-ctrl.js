const Users = require("../Models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Register: async (req, res) => {
    if (await Users.exists({ Email: req.body.Email }))
      return res.status(400).send({ Message: "~~Email Already Used~~" });

    bcrypt.hash(req.body.Password, 10, async (err, hasedPassword) => {
      if (err) return res.status(500).send({ Message: err });
      req.body.Password = hasedPassword;
      await Users.create(req.body)
        .then((result) =>
          res.status(200).send({ Message: "User Added Successfully", result })
        )
        .catch((err) => res.status(500).send(err));
    });
  },

  Login: async (req, res) => {
    if (Users.exists(req.body.Email) == false)
      return res.status(400).json({ message: "Email not found" });
    try {
      const user = await Users.findOne({ Email: req.body.Email }).populate('Company Ideas');
      bcrypt.compare(req.body.Password, user.Password, (err, isMatch) => {
        if (err) return res.status(500).json({ message: "Error" });
        if (!isMatch)
          return res.status(400).json({ message: "Password incorrect" });
        const token = jwt.sign({ user }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({ message: "Login successful", token });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  GetAll: async (req, res) => {
    await Users.find()
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err));
  },

  GetUser: async (req, res) => {
    await Users.findById({ _id: req.params.id }).populate('Company Ideas')
      .then((data) => res.send({ Chosen_User: data }))
      .catch((err) => res.send(err));
  },

  DeleteUserById: async (req, res) => {
    await Users.findByIdAndRemove({ _id: req.params.id })
      .then((deletedUser) =>
        res.status(200).send({ DELETED_USER: deletedUser })
      )
      .catch((err) => {
        res.status(403).send({ ErrMessage: err });
      });
  },

  UpdateUser: async (req, res) => {
    await Users.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => res.send(data))
      .catch((err) => res.status(404).send({ message: err.message }));
  },

  GetAllCreatedPosts: async (req, res) => {
    const Ideas = await Users.findOne({ _id: req.params.id }).populate("Ideas");
    res.send(Ideas.cratedPost);
  },
  addUser : async (req, res) => {
  await Users.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
}
};
