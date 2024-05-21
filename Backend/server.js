const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const bcrypt = require("bcryptjs");
const { connectDB } = require('./views/database.js');

require('dotenv').config()


connectDB();



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const contentSchema = new mongoose.Schema({
  title: String,
  videoLink: String,
  pdfLink: String,
  pptLink: String,
});


const authSchema = new mongoose.Schema({
  email: String,
  password: String
});

const courseSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  img: String
})

const Course = mongoose.model("Course", courseSchema);
const Content = mongoose.model("Content", contentSchema);
const Auth = mongoose.model("Auth", authSchema);


app.get("/api/data", async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses" });
  }
});


app.get('/login', (req, res) => {
  res.render("AdminLogin")
})
app.get('/sidebar', (req, res) => {
  res.render("sidebar")
})

app.post('/api/auth', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Auth.findOne({ email }).exec();
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Auth({ email, password: hashedPassword });
      await newUser.save();
      res.json(newUser);
    } else {
      res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ message: 'Error authenticating user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email }).exec();
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        res.json({ message: 'Login successful', success:true });
      } else {
        res.status(401).json({ message: 'Invalid password', success:false });
      }
    } else {
      res.status(401).json({ message: 'User not found', success:false });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

app.get('/dash', (req, res) => {
  res.json()
})

app.get('/courses', async (req, res) => {

  const courses = await Course.find();
  res.json(courses)

})

app.get('/contents', async (req, res) => {

  const contents = await Content.find();
  res.json(contents)

})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port`);
});