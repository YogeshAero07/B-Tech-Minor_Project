// require detabase
const jwt = require("jsonwebtoken");   

const queschema = require("../models/questionschema");


module.exports = async (req, res) => {

  try{
    console.log(req.params.id )

   
    const ques = await queschema.findByIdAndUpdate(req.params.id,{
      $set:{
        status: 0
      }
    });
    console.log(ques)
    res.status(200).json({
      success : true,
      ques,
    })
    
  
  }catch(error){
    res.status(200).json({
      success: false,
      error: ("sone error in end file"),
    })
  }

  
};

