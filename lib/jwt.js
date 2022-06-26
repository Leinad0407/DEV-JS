const jwt = require("jsonwebtoken");

const JWT_SECRET = "shhhhh";

function sign(payload) {
  return jwt.sign(payload, JWT_SECRET);
}
