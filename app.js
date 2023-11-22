const express=require('express');
const sendMail = require('./controllers/sendMail');
const app=express();
const PORT=5000;
// const sendMail=require("./controllers/sendMail");

app.get('/',(req,res)=>{
    res.send("i am a server");
})

app.get('/sendmail',sendMail);

const start = async () =>{
    try{
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        });
    }
    catch(error){
        console.log(error);
    }
}

start();
// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// })