const express = require("express");
const userInfo = require("../users/userInfo");
const CommonMiddleware = require("../middleware/commonMiddleware");
const userRouter = express.Router();
console.log("hello from userRouter");
// userRouter.param("id", CommonMiddleWare.checkId);
userRouter.route("/").get(userInfo.getUsers).post(userInfo.createUser);

userRouter
  .route("/:id")
  .get(userInfo.getUser)
  .patch(userInfo.updateUser)
  .delete(userInfo.deleteUser);

module.exports = userRouter;
