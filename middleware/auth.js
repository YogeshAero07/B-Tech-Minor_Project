const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log;
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(
      token,
      "onedayharshalwillbeagoodengineerandgooddevloper"
    );

    const user = await User.findById(decoded.id);
    const tokenidstore = decoded.id;
    console.log("tokenid " + tokenidstore);
    module.exports = { tokenidstore };

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};