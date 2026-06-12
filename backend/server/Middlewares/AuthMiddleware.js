const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  console.log("Cookies received:", req.cookies);
  const token = req.cookies.token
  if (!token) {
     console.log("NO TOKEN");
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("JWT ERROR:", err.message);
     return res.json({ status: false })
    } else {
      console.log("JWT DATA:", data);
      const user = await User.findById(data.id)
      if (user){
        console.log("USER FOUND:", user.username);
        return res.json({ status: true, user: user.username })}

      else {
        console.log("USER NOT FOUND");
        return res.json({ status: false })}
    }
  })
}