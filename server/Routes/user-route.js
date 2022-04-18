const UsersCrud = require('../Controllers/user-ctrl');
const userRouter = require('express').Router();

userRouter.get('/',UsersCrud.GetAll);
userRouter.get('/:id',UsersCrud.GetUser);
userRouter.post('/login',UsersCrud.Login);
userRouter.post('/',UsersCrud.addUser);
userRouter.post('/register',UsersCrud.Register);
userRouter.delete('/:name',UsersCrud.DeleteUserById);

module.exports = userRouter;


