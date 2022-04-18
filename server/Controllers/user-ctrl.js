const Users = require("../Models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
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
  addUser : async (req, res) => {
  await Users.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
}
};
