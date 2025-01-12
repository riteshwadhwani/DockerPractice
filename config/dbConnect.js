//ORM -> MONGOOSE
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connect = () =>{
    mongoose.connect(process.env.URL)
    .then(()=>{console.log("Connected To Database")})
    .catch(error =>  error)
}

module.exports = connect;