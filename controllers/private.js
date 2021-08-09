exports.getPrivateRoute = (req, res, next) => {
  res
    .status(200)
    .json({
      success: "this is success",
      data: "You got access to the private data in this route",
    });
};
