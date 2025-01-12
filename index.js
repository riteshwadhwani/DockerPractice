const express = require("express"); //object 
require("dotenv").config();  //process object
const router = require("./Routes/ProductRouter.js");
const connect = require("./config/dbConnect.js");


const app  = express();
const PORT = process.env.PORT;

connect();

//body-Parser // Json parser //middleware used to parse the body
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Running at port ${PORT}`);
})

//Get Post Put Delete
app.get("/",(request,response)=>{
    response.send("You are on the Home Page!!");
});

app.use("/api/v1",router);


