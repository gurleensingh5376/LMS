const express = require ('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app= express()
const port= 3003
mongoose.connect('mongodb://localhost:27017/Lms')
  .then((data) => 
  {
    console.log('Connected!')
});

// to set default view engine to hbs
app.set('view engine','hbs')

//bodyParser is used to convert the html code render on frontend
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//here we are making and defining the datatypes
const name = new mongoose.Schema({
  name:string
})

const auth =new mongoose.Schema({
  id:string,
  pass:string
})

const sendname = mongoose.model('detail',name)
const signup = mongoose.model('auth',auth)

app.get('/', (req, res)=>{
     res.render("dashboards")
})


app.post("/data",(req,res)=>{
const{email,password}= req.body;
console.log("email  is received=" + email);
console.log("password is received="+password);

bcrypt.hash(password,10,function(err, hash){
  const signupdetails = signup ({"id":email, "pass":hash});
  signupdetails.save().then((data)=>{
    res.render('dashboards')
  })
});

})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)

    let data=new sendname({'name':'gurleen'})
    data.save().then((res)=>console.log(res))
})