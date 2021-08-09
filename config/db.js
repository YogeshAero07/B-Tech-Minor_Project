//MongoDB Databased Connection
const mongoose = require("mongoose");

// const DB = 'mongodb+srv://college-project07:<React@07>@cluster0.lmwyh.mongodb.net/React_App?retryWrites=true&w=majority'


const connectDB = async () => {
  await mongoose.connect( "mongodb+srv://college-project07:React@07@cluster0.lmwyh.mongodb.net/React_App?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;