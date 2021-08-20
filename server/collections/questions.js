      
const express = require("express");
const path = require("path");
const app = express();               
const jwt = require("jsonwebtoken");              
const cookieParser = require("cookie-parser");   


// const auth = require("../middlewere/auth");          
      

// require("../db/conn");
const question = require("../models/questionschema");



module.exports = async (req,res) =>{
    try {
       

        const questionsave = new question({
          questions:req.body.questions,
          title:req.body.title,
          status:req.body.status,
          created: new Date(),
          updeted: new Date(),
          published: new Date(),
          assets:req.body.assets,
          user: "604dca761fe4dc2cb80200ae"
       
        })

        console.log("the success part" + questionsave);
       

        console.log("HEllow")

        const register = await questionsave.save();
        res.send("saved")

        
    } catch (error) {
      res.send("no")
    }
};