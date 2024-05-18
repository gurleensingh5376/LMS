const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app =express()

//send data through backend to frontend
// const card=[
//   {
//     para:"this is 1 card"
//   },
//   {
//     para:"this is 2 card"
//   }, {
//     para:"this is 3 card"
//   }, {
//     para:"this is 4 card"
//   }, {
//     para:"this is 5 card"
//   }, {
//     para:"this is 6 card"
//   }, {
//     para:"this is 7 card"
//   },
// ]



// Coneect to mongodb
mongoose.connect('mongodb://localhost:27017/test');

// data convert into json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cross-origin  
app.use(function(req, res, next) {   
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});



// Creating Schema using mangoose
const data= new mongoose.Schema({email:String,password:String
});

// Creating model using schema
const auth=mongoose.model('auths',data);


app.post('/api/auth',(req, res)=>{
   console.log(req.body)
  let sendauth = new auth(req.body);
  sendauth.save().then((val)=>{
    console.log(val)
    res.json(val)
  })
});


app.listen(4000, (res) => {
  console.log('Listening on port 4000');
});