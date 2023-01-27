const jwt = require("jsonwebtoken");

const authencateToken = async (request, response, next) => {
  const token = request.body.token;
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
    if (!err) {
      next();
    } else {
      response.send("invalid");
    }
  });
};

module.exports = authencateToken;
