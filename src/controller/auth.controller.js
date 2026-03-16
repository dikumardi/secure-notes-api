  const userModel = require("../models/user.model");
  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcrypt");

  async function registerController(req, res) {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await userModel.create({
      name,
      email,
      password:await bcrypt.hash(password, 10),
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token);

    res.status(201).json({ message: "User Registered Successfully" });
  }

  async function loginUserController(req, res) {
    const {  email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid =await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({ message: "User LoggedIn Successfully" });
  }

  async function logoutUserController(req, res) {
   res.clearCookie("token");
    res.status(200).json({ message: "User Logged Out Successfully" });
  }

  module.exports = {
    registerController,
    loginUserController,
    logoutUserController,
  };
