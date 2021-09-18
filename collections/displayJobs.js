const jwt = require("jsonwebtoken");
const jonSchema = require("../models/addNewJobSchema");

// To feach deta from the detabse
module.exports = async (req, res) => {
  try {
    const ques = await jonSchema.find();
    // console.log(ques);
    res.status(200).json({
      success: true,
      ques,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: "sone error in display job file",
    });
  }
};
