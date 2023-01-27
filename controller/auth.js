const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (request, response) => {
  const { email, password } = request.body;

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);
  // const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ email, password: hash });

    response.status(200).json({
      message: "successfully created user",
      data: user.email,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400).json({ message: "unauthorized" });
  }

  const user = await User.findOne({ email: email });

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    const token = jwt.sign(
      {
        user: user.email,
      },
      process.env.ACCESS_TOKEN_KEY
    );
    response.status(200).json({
      id: user._id,
      email: user.email,
      token: token,
    });
  } else {
    response.status(401).json({
      message: "failed",
    });
  }
};
