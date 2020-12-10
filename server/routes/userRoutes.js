const express = require("express");

const UserServices = require("../services/userServices");
const userRouter = express.Router();

// /api/users/signup
userRouter.route("/signup").post(UserServices.signup);

// /api/users/login
userRouter.route("/login").post(UserServices.login);

// /api/users/items
userRouter.route("/items").post(UserServices.getItemsByUser);

// /api/users/items
userRouter.route('/items').post(UserServices.getItemsByUser)

module.exports = userRouter;
