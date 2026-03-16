const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function notesMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized User" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = { notesMiddleware };