const UsersCrud = require('../Controllers/user-ctrl');
const userRouter = require('express').Router();

userRouter.get('/',UsersCrud.GetAll);
userRouter.get('/:id',UsersCrud.GetUser);
userRouter.post('/',UsersCrud.addUser);
userRouter.delete('/:name',UsersCrud.DeleteUserById);

module.exports = userRouter;


