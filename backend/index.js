const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const interestListModel = require('./models/interest_list');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully!");
})

app.get("/interestList", async (req, res) => {
  try{
    const interest = await interestListModel.find({});
    res.json(interest);
    console.log(interest);
  } catch (err) {
      console.log(err);
    } 
})

app.get("/", async (req, res) => {
  res.send("FCSC Rentals");
  console.log("Welcome to FCSC Rentals!");
})

app.post("/newInterest", async (req, res) => {
  try{
    const interest = await interestListModel.create(req.body)
    res.status(200).json(interest);
  } catch (error){
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})
  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});