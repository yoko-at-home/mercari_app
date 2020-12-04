const express = require("express");

const UserServices = require("../services/userServices");
const userRouter = express.Router();

userRouter.route("/signup").post(UserServices.signup);
userRouter.route("/login").post(UserServices.login);
userRouter.route('/items').post(UserServices.getItemsByUser)

module.exports = userRouter;
