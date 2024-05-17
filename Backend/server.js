const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()
const bcrypt = require("bcryptjs");
const saltRounds = 10;
 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


mongoose.connect("mongodb://localhost:27017/test").then(() => console.log("Connected!"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json()); 

const data = new mongoose.Schema({
  email: String,
  password: String,
});

const auth = mongoose.model("auths", data);

app.post('/api/auths',(req,res)=>{
  console.log(req.body);
  const password = req.body.password;
  const email = req.body.email;

  auth.findOne({email}).then((val)=>{
  
   if(val==null)
   {
     console.log("No data found")
     
     bcrypt.hash(password,saltRounds,function(err,hash){
       console.log(hash)
       let sendauth = new auth({email:email,password:hash});
     sendauth.save().then((val)=>{
       console.log(val)
       res.json(val)
     })
   });
     
   }
   else{
     console.log("user already exist")
   }
 })
})

app.post('/login',(req,res)=>{
  const email = req.body.email;
  console.log(email);
  auth.findOne({email : email}).then((val) =>{

     if( val != null) {
     console.log(val);
     
     bcrypt.compare(req.body.password,val.password , function(err , result){
      console.log(result);
      res.json(result);
     })
  }else{
      res.json("Enter Correct Email")
      // console.log(val)
  }
  })
})

app.get('/dash',(req,res)=>{
  res.json()
})

app.listen(4000, () => {
  console.log("listening port 4000");
});