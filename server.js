const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //this helps to connect to mongodb database

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//this is middleware
app.use(cors());
//this allows us to parse json
app.use(express.json());

//this is databse uri - getting from mongodb dashboard
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDb database connection established successfully");
})

const recipesRouter = require('./routes/recipes');
const peepsRouter = require('./routes/peeps');

app.use('/recipes', recipesRouter);
app.use('/peeps', peepsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});