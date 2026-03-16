const express = require("express");
const {
  registerController,
  loginUserController,
  logoutUserController,
} = require("../controller/auth.controller");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);

module.exports = router;
