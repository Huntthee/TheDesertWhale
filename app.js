// Import required modules
const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;

const uri = 'mongodb+srv://Huntthee:Slay3r11@desertcluster.rtzty.mongodb.net/desArtwork?retryWrites=true&w=majority';

// Connect to the database
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log("Mongoose is connected"),
  );
} catch (error) {
  console.log("failed to connect");
}; 

const dbConnected = mongoose.connection;
dbConnected.on("error", (err) => console.log(`Connection error ${err}`));
dbConnected.once("open", () => console.log("Connected to DB!"));

const artSchema = new Schema({

})