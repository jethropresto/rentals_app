const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const interestListModel = require('./models/interest_list')

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

app.get("/getInterestList", async (req, res) => {
  const allInterestList = await interestListModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});