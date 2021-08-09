
const jwt = require("jsonwebtoken");              
  


// const auth = require("../middlewere/auth");          
      

// require("../db/conn");
const question = require("../models/questionschema");
const questions = require("./questions");







module.exports = async (req,res) =>{
  const {questions, title, status, assets} = req.body;
  const quefields = {};
  if(questions) quefields.questions = questions;
  if(title) quefields.title = title;
  if(status) quefields.status = status;
  if(assets) quefields.assets = assets;
    try {

        let ques = await question.findById(req.params.id);
        if(!ques){
            return res.status(404).json({msg: 'question is not found'})
        }

        ques = await question.findByIdAndUpdate(req.params.id,{
            $set: quefields 
        }, {new : true} )
       res.status(200).json({
         status : true,
         ques
       })

       
    } catch (error) {
      res.status(200).json({
       status: false,
       
      })
    }

  

};