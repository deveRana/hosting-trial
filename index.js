const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//get route on root
app.get('/',(req,res)=>{
    res.status(200).json({msg:'i have changed the message to check if the server is being updated or not'});    
})

//post route
app.post('/',(req,res)=>{
    res.status(200).json({msg:'this is the post route and its working'});        
})

//listen on this port
app.listen(PORT , ()=>{
    console.log(`server is running on port ${3000}`)
})
